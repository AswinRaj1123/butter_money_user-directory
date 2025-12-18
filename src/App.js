import { useState } from 'react';
import { useUsers } from './hooks/useUsers';
import { useLocalStorage } from './hooks/useLocalStorage';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import UserForm from './components/UserForm';
import UserDetailsModal from './components/UserDetailsModal';
import { filterUsers } from './utils/filters';

function App() {
  const { users, loading, error } = useUsers();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);
  const [addedUsers, setAddedUsers] = useLocalStorage('addedUsers', []);

  let displayedUsers = [...users, ...addedUsers];
  displayedUsers.sort((a, b) => {
    const comparison = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    return sortAsc ? comparison : -comparison;
  });
  const filteredUsers = filterUsers(displayedUsers, searchTerm);

  return (
    <div className="min-h-screen bg-surface-100 py-6 px-3 sm:py-8 sm:px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-semibold text-ink tracking-tight">User Directory</h1>
          <p className="text-sm sm:text-base text-ink-muted mt-1">Manage and browse all users</p>
        </header>

        {/* Add User Form */}
        <UserForm onAddUser={(user) => setAddedUsers([...addedUsers, user])} />

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="flex-1">
            <SearchBar onSearch={setSearchTerm} />
          </div>
          <button onClick={() => setSortAsc(!sortAsc)} className="btn-secondary whitespace-nowrap">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
            {sortAsc ? 'A → Z' : 'Z → A'}
          </button>
        </div>

        {/* User List */}
        <UserList users={filteredUsers} loading={loading} error={error} onUserClick={setSelectedUser} />

        {/* Modal */}
        {selectedUser && <UserDetailsModal user={selectedUser} onClose={() => setSelectedUser(null)} />}
      </div>
    </div>
  );
}

export default App;