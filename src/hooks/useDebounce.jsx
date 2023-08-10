import { useEffect, useState } from 'react';

const useDebounce = (value, delay = 400) => {
  const [debouncedVal, setDebouncedVal] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedVal(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, value]);

  return debouncedVal;
};

export default useDebounce;
