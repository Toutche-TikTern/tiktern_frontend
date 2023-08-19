'use client';
import { useState } from 'react';

//? ******* ONLY STRINGS ********
// Custom hook for setting a string value in local storage
const useLocalStorage = (key: string) => {
  // Get the initial value from local storage or use an empty string
  const initialValue = localStorage.getItem(key) || '';

  // Create a state to manage the value
  const [value, setValue] = useState(initialValue);

  // Function to set the value in local storage
  const setStoredValue = (newValue: string) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, setStoredValue];
};

export default useLocalStorage;
