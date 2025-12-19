/**
 * useLocalStorage Hook
 * 
 * Custom hook for persisting state in localStorage.
 * Works like useState but automatically syncs with localStorage.
 * 
 * @param {string} key - The localStorage key to store data under
 * @param {*} initialValue - Default value if no stored value exists
 * @returns {Array} [value, setValue] - Same API as useState
 * 
 * Usage:
 * const [users, setUsers] = useLocalStorage('addedUsers', []);
 */

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  // Initialize state from localStorage or use initialValue
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  // Sync to localStorage whenever value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};