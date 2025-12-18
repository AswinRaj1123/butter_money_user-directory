import axios from 'axios';
import { API_URL } from '../constants/index.js';  // If you added constants, else hardcode the URL

export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};