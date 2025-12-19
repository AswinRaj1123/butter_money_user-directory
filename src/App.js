/**
 * App.js - Main Application Component
 * 
 * This is the root component that orchestrates the entire User Directory application.
 * It manages global state and renders all child components.
 * 
 * Features:
 * - Fetches users from API via useUsers hook
 * - Persists locally added users in localStorage
 * - Provides search, sort, and filter functionality
 * - Displays user details in a modal
 */

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
  // Fetch users from API with loading and error states
  const { users, loading, error } = useUsers();
  
  // Local state for search functionality
  const [searchTerm, setSearchTerm] = useState('');
  
  // Currently selected user for modal display (null = modal closed)
  const [selectedUser, setSelectedUser] = useState(null);
  
  // Sort direction: true = A-Z, false = Z-A
  const [sortAscending, setSortAscending] = useState(true);
  
  // Users added via form, persisted in localStorage
  const [localUsers, setLocalUsers] = useLocalStorage('addedUsers', []);

  // Combine API users with locally added users
  const allUsers = [...users, ...localUsers];
  
  // Apply sorting then filtering to get final displayed users
  const sortedUsers = sortUsersByName(allUsers, sortAscending);
  const filteredUsers = filterUsers(sortedUsers, searchTerm);

  // Handler: Add new user to localStorage
  const handleAddUser = (newUser) => setLocalUsers([...localUsers, newUser]);
  
  // Handler: Toggle sort direction
  const toggleSort = () => setSortAscending((prev) => !prev);
  
  // Handler: Close user details modal
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