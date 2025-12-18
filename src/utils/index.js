/**
 * Extracts initials from a full name (max 2 characters)
 * @param {string} name - Full name
 * @returns {string} Uppercase initials
 */
export const getInitials = (name) => {
  if (!name) return '';
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
};

/**
 * Formats an address object into a readable string
 * @param {Object} address - Address with street and city
 * @returns {string} Formatted address or fallback
 */
export const formatAddress = (address) => {
  if (!address) return '—';
  const { street, city } = address;
  if (!street && !city) return '—';
  return [street, city].filter(Boolean).join(', ');
};

/**
 * Returns value or fallback for empty/null values
 * @param {*} value - Value to check
 * @param {string} fallback - Fallback string
 * @returns {string}
 */
export const valueOrFallback = (value, fallback = '—') => value || fallback;

/**
 * Sorts users alphabetically by name
 * @param {Array} users - Array of user objects
 * @param {boolean} ascending - Sort direction
 * @returns {Array} Sorted users
 */
export const sortUsersByName = (users, ascending = true) => {
  return [...users].sort((a, b) => {
    const comparison = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    return ascending ? comparison : -comparison;
  });
};
