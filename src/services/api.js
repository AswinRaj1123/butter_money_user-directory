/**
 * API Service
 * 
 * Centralized API calls for the application.
 * Uses axios for HTTP requests with error handling.
 */

import axios from 'axios';
import { API_URL } from '../constants/index.js';

/**
 * Fetches all users from the JSONPlaceholder API
 * 
 * @returns {Promise<Array>} Array of user objects
 * @throws {Error} If the API request fails
 * 
 * API Endpoint: https://jsonplaceholder.typicode.com/users
 */
export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};