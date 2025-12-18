const SearchBar = ({ onSearch }) => (
  <input
    type="text"
    placeholder="Search by name or email..."
    onChange={(e) => onSearch(e.target.value)}
    className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:border-blue-500"
  />
);

export default SearchBar;