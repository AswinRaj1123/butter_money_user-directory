const SearchBar = ({ onSearch }) => (
  <div className="relative">
    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-ink-subtle absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    <input
      type="text"
      placeholder="Search users..."
      onChange={(e) => onSearch(e.target.value)}
      className="input-field pl-9 sm:pl-10 text-sm sm:text-base py-2.5 sm:py-3"
    />
  </div>
);

export default SearchBar;