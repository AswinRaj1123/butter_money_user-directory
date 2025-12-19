/**
 * UserCard Component
 * 
 * Displays a single user's preview information in a clickable card format.
 * Used in the UserList to show each user's basic details.
 * 
 * Props:
 * @param {Object} user - User object containing name, email, phone
 * @param {Function} onClick - Callback when card is clicked (opens modal)
 * 
 * Responsive behavior:
 * - Mobile: Phone number shown below email
 * - Desktop: Phone number shown on the right side
 */

import Avatar from './Avatar';

const UserCard = ({ user, onClick }) => {
  // Destructure user properties for cleaner JSX
  const { name, email, phone } = user;

  return (
    <div
      onClick={onClick}
      className="card p-4 sm:p-5 mb-3 cursor-pointer hover:shadow-lifted hover:border-surface-300 active:bg-surface-50"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        {/* User avatar with initials */}
        <Avatar name={name} size="sm" />
        
        <div className="flex-1 min-w-0">
          {/* Name and phone (desktop) row */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-medium text-ink text-sm sm:text-base truncate">{name}</h3>
            {/* Phone - hidden on mobile, shown on desktop */}
            <span className="text-xs sm:text-sm text-ink-subtle whitespace-nowrap hidden sm:block">
              {phone}
            </span>
          </div>
          
          {/* Email */}
          <p className="text-xs sm:text-sm text-ink-muted truncate">{email}</p>
          
          {/* Phone - shown on mobile only */}
          <p className="text-xs text-ink-subtle mt-1 sm:hidden">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;