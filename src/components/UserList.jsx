import UserCard from './UserCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const UserList = ({ users, loading, error, onUserClick }) => {
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  if (users.length === 0) {
    return <div className="text-center py-8">No users found</div>;
  }

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onClick={() => onUserClick(user)} />
      ))}
    </div>
  );
};

export default UserList;