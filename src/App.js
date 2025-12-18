import { useState } from 'react';
import { useUsers } from './hooks/useUsers';
import { useLocalStorage } from './hooks/useLocalStorage';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import UserForm from './components/UserForm';          // ← Add this import
import UserDetailsModal from './components/UserDetailsModal';
import { filterUsers } from './utils/filters';

function App() {
  const { users, loading, error } = useUsers();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);

  // Persist added users in localStorage
  const [addedUsers, setAddedUsers] = useLocalStorage('addedUsers', []);

  // Combine API users + locally added users
  let displayedUsers = [...users, ...addedUsers];

  // Sort alphabetically
  displayedUsers.sort((a, b) => {
    const comparison = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    return sortAsc ? comparison : -comparison;
  });

  // Filter after sorting
  const filteredUsers = filterUsers(displayedUsers, searchTerm);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  // ← Add this function to handle new user from form
  const handleAddUser = (newUser) => {
    setAddedUsers([...addedUsers, newUser]);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center">
        User Directory
      </h1>

      {/* Add New User Form */}
      <UserForm onAddUser={handleAddUser} />

      {/* Search + Sort */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <SearchBar onSearch={setSearchTerm} />

        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          Sort by Name {sortAsc ? '↑' : '↓'}
        </button>
      </div>

      <UserList
        users={filteredUsers}
        loading={loading}
        error={error}
        onUserClick={handleUserClick}
      />

      {/* User Details Modal */}
      {selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
}

export default App;