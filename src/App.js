import { useUsers } from './hooks/useUsers';
import UserList from './components/UserList';

function App() {
  const { users, loading, error } = useUsers();

  const handleUserClick = (user) => {
    // For now, just log to console – we'll add modal later
    console.log('Clicked user:', user);
    alert(`Clicked: ${user.name}`);  // Temporary feedback
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">User Directory</h1>
      <UserList users={users} loading={loading} error={error} onUserClick={handleUserClick} />
    </div>
  );
}

export default App;