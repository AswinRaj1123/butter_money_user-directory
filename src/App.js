import { useState } from 'react';
import { useUsers } from './hooks/useUsers';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import UserDetailsModal from './components/UserDetailsModal';
import UserForm from './components/UserForm';
import { filterUsers } from './utils/filters';

function App() {
  const { users: apiUsers, loading, error } = useUsers();
  const [addedUsers, setAddedUsers] = useState([]);  // Local added users
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const allUsers = [...apiUsers, ...addedUsers];
  const filteredUsers = filterUsers(allUsers, searchTerm);

  const handleAddUser = (newUser) => {
    setAddedUsers([...addedUsers, newUser]);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">User Directory</h1>
      
      <UserForm onAddUser={handleAddUser} />
      
      <SearchBar onSearch={setSearchTerm} />
      
      <UserList
        users={filteredUsers}
        loading={loading}
        error={error}
        onUserClick={handleUserClick}
      />
      
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