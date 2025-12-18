import UserCard from './UserCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import EmptyState from './EmptyState';

const UserList = ({ users, loading, error, onUserClick }) => {
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (users.length === 0) return <EmptyState icon="users" message="No users found" />;

  return (
    <ul className="space-y-0">
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} onClick={() => onUserClick(user)} />
        </li>
      ))}
    </ul>
  );
};

export default UserList;