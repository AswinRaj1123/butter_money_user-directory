import Icon from './Icon';

const SearchBar = ({ onSearch, className = '' }) => (
  <div className={`relative ${className}`}>
    <Icon name="search" className="w-4 h-4 sm:w-5 sm:h-5 text-ink-subtle absolute left-3 top-1/2 -translate-y-1/2" />
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