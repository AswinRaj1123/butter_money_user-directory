import UserCard from './UserCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const UserList = ({ users, loading, error, onUserClick }) => {
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (users.length === 0) {
    return (
      <div className="card p-8 sm:p-12 text-center">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-200 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-ink-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <p className="text-ink-muted text-sm sm:text-base">No users found</p>
      </div>
    );
  }
  return (
    <div className="space-y-0">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onClick={() => onUserClick(user)} />
      ))}
    </div>
  );
};

export default UserList;