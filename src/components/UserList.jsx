/**
 * UserList Component
 * 
 * Renders a list of user cards with support for loading, error, and empty states.
 * Acts as the main content area of the application.
 * 
 * Props:
 * @param {Array} users - Array of user objects to display
 * @param {boolean} loading - Whether data is being fetched
 * @param {string} error - Error message if fetch failed
 * @param {Function} onUserClick - Callback when a user card is clicked
 * 
 * States handled:
 * 1. Loading - Shows spinner
 * 2. Error - Shows error message
 * 3. Empty - Shows "No users found" message
 * 4. Success - Renders list of UserCards
 */

import UserCard from './UserCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import EmptyState from './EmptyState';

const UserList = ({ users, loading, error, onUserClick }) => {
  // Show loading spinner while fetching
  if (loading) return <LoadingSpinner />;
  
  // Show error message if fetch failed
  if (error) return <ErrorMessage message={error} />;
  
  // Show empty state if no users match search/filter
  if (users.length === 0) return <EmptyState icon="users" message="No users found" />;

  // Render list of user cards
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