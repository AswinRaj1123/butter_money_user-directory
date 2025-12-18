import { useState } from 'react';
import { useUsers } from './hooks/useUsers';
import { useLocalStorage } from './hooks/useLocalStorage';
import { filterUsers } from './utils/filters';
import { sortUsersByName } from './utils';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import UserForm from './components/UserForm';
import UserDetailsModal from './components/UserDetailsModal';
import SortButton from './components/SortButton';

function App() {
  const { users, loading, error } = useUsers();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [sortAscending, setSortAscending] = useState(true);
  const [localUsers, setLocalUsers] = useLocalStorage('addedUsers', []);

  const allUsers = [...users, ...localUsers];
  const sortedUsers = sortUsersByName(allUsers, sortAscending);
  const filteredUsers = filterUsers(sortedUsers, searchTerm);

  const handleAddUser = (newUser) => setLocalUsers([...localUsers, newUser]);
  const toggleSort = () => setSortAscending((prev) => !prev);
  const closeModal = () => setSelectedUser(null);

  return (
    <div className="min-h-screen bg-surface-100 py-6 px-3 sm:py-8 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-semibold text-ink tracking-tight">User Directory</h1>
          <p className="text-sm sm:text-base text-ink-muted mt-1">Manage and browse all users</p>
        </header>

        <UserForm onAddUser={handleAddUser} />

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <SearchBar onSearch={setSearchTerm} className="flex-1" />
          <SortButton ascending={sortAscending} onClick={toggleSort} />
        </div>

        <UserList
          users={filteredUsers}
          loading={loading}
          error={error}
          onUserClick={setSelectedUser}
        />

        {selectedUser && <UserDetailsModal user={selectedUser} onClose={closeModal} />}
      </div>
    </div>
  );
}

export default App;