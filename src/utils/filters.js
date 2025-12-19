/**
 * Filter Utilities
 * 
 * Functions for filtering user data based on search criteria.
 */

/**
 * Filters users by name or email matching the search term
 * 
 * @param {Array} users - Array of user objects to filter
 * @param {string} searchTerm - Search query entered by user
 * @returns {Array} Filtered array of users matching the search term
 * 
 * Behavior:
 * - Case-insensitive search
 * - Matches partial strings (contains)
 * - Returns all users if search term is empty
 * - Searches both name and email fields
 */
export const filterUsers = (users, searchTerm) => {
  // Return all users if search term is empty or whitespace
  if (!searchTerm.trim()) return users;

  // Convert to lowercase for case-insensitive comparison
  const lowerTerm = searchTerm.toLowerCase();
  
  // Filter users where name OR email contains the search term
  return users.filter((user) =>
    user.name.toLowerCase().includes(lowerTerm) ||
    user.email.toLowerCase().includes(lowerTerm)
  );
};