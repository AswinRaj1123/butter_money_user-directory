import { useState } from 'react';
import { useUsers } from './hooks/useUsers';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import { filterUsers } from './utils/filters';

function App() {
  const { users, loading, error } = useUsers();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);  // We'll use this soon for modal

  const filteredUsers = filterUsers(users, searchTerm);

  const handleUserClick = (user) => {
    setSelectedUser(user);  // Temporary – will open modal next
    // Remove the alert/console.log from before
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">User Directory</h1>
      
      <SearchBar onSearch={setSearchTerm} />
      
      <UserList
        users={filteredUsers}
        loading={loading}
        error={error}
        onUserClick={handleUserClick}
      />
    </div>
  );
}

export default App;