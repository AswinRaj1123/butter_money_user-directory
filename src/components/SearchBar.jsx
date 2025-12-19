/**
 * SearchBar Component
 * 
 * Input field for searching/filtering users by name or email.
 * Includes a search icon and real-time filtering on input change.
 * 
 * Props:
 * @param {Function} onSearch - Callback with search term on every keystroke
 * @param {string} className - Additional CSS classes for the container
 */

import Icon from './Icon';

const SearchBar = ({ onSearch, className = '' }) => (
  <div className={`relative ${className}`}>
    {/* Search icon positioned inside the input */}
    <Icon name="search" className="w-4 h-4 sm:w-5 sm:h-5 text-ink-subtle absolute left-3 top-1/2 -translate-y-1/2" />
    
    {/* Search input - triggers onSearch callback on every change */}
    <input
      type="text"
      placeholder="Search users..."
      onChange={(e) => onSearch(e.target.value)}
      className="input-field pl-9 sm:pl-10 text-sm sm:text-base py-2.5 sm:py-3"
      aria-label="Search users"
    />
  </div>
);

export default SearchBar;