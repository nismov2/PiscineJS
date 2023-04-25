import { useEffect, useRef } from 'react';

export const useDebounce = (fn, delay) => {
  const { current } = useRef({ fn, timer: null });

  useEffect(() => {
    current.fn = fn;
  }, [fn]);
  
  return (...args) => {
    if (current.timer) {
      clearTimeout(current.timer);
    }
    current.timer = setTimeout(() => {
      current.fn(...args);
    }, delay);
  };
};


const debounce = (fn, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}; 

const opDebounce = (fn, delay, options) => {
    let timeout;
    return (...args) => {
        if (options.leading) {
        fn(...args);
        }
        clearTimeout(timeout);
        timeout = setTimeout(() => {
        fn(...args);
        }, delay);
    };
    };


export { debounce, opDebounce };

