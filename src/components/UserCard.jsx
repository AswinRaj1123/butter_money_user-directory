import Avatar from './Avatar';

const UserCard = ({ user, onClick }) => {
  const { name, email, phone } = user;

  return (
    <div
      onClick={onClick}
      className="card p-4 sm:p-5 mb-3 cursor-pointer hover:shadow-lifted hover:border-surface-300 active:bg-surface-50"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <Avatar name={name} size="sm" />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-medium text-ink text-sm sm:text-base truncate">{name}</h3>
            <span className="text-xs sm:text-sm text-ink-subtle whitespace-nowrap hidden sm:block">
              {phone}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-ink-muted truncate">{email}</p>
          <p className="text-xs text-ink-subtle mt-1 sm:hidden">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;