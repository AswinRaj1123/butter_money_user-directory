/**
 * Avatar Component
 * 
 * Displays a circular avatar with user's initials.
 * Supports multiple sizes for different contexts.
 * 
 * Props:
 * @param {string} name - User's full name (used to generate initials)
 * @param {string} size - Size variant: 'sm' (default) or 'md'
 */

import { getInitials } from '../utils';

// Size variants with responsive classes
const SIZES = {
  sm: 'w-10 h-10 sm:w-11 sm:h-11 text-xs sm:text-sm',  // Used in UserCard
  md: 'w-12 h-12 sm:w-14 sm:h-14 text-sm sm:text-base', // Used in Modal
};

const Avatar = ({ name, size = 'sm' }) => (
  <div
    className={`${SIZES[size]} rounded-full bg-surface-200 flex items-center justify-center text-ink-muted font-medium flex-shrink-0`}
  >
    {/* Display first 2 initials of the name */}
    {getInitials(name)}
  </div>
);

export default Avatar;
