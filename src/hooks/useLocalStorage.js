import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      if (typeof value !== "number") {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
      } else {
        setStoredValue(value);
        window.localStorage.setItem(key, value);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
