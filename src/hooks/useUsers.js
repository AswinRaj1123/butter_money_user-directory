/**
 * useUsers Hook
 * 
 * Custom hook for fetching users from the API.
 * Handles loading state, error state, and data caching.
 * 
 * @returns {Object} { users, loading, error }
 * - users: Array of user objects from API
 * - loading: Boolean indicating if data is being fetched
 * - error: Error message string if fetch failed, null otherwise
 * 
 * Usage:
 * const { users, loading, error } = useUsers();
 */

import { useState, useEffect } from 'react';
import { fetchUsers } from '../services/api';

export const useUsers = () => {
  // State for storing fetched users
  const [users, setUsers] = useState([]);
  
  // Loading state - true until fetch completes
  const [loading, setLoading] = useState(true);
  
  // Error state - stores error message if fetch fails
  const [error, setError] = useState(null);

  useEffect(() => {
    /**
     * Async function to fetch users from API
     * Called once on component mount
     */
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        // Always set loading to false when done
        setLoading(false);
      }
    };

    loadUsers();
  }, []); // Empty dependency array = run once on mount

  return { users, loading, error };
};