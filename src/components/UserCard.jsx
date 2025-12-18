const UserCard = ({ user, onClick }) => (
  <div onClick={onClick} className="card p-4 sm:p-5 mb-3 cursor-pointer hover:shadow-lifted hover:border-surface-300 active:bg-surface-50">
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-surface-200 flex items-center justify-center text-ink-muted font-medium text-xs sm:text-sm flex-shrink-0">
        {user.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-ink text-sm sm:text-base truncate">{user.name}</h3>
          <span className="text-xs sm:text-sm text-ink-subtle whitespace-nowrap hidden sm:block">{user.phone}</span>
        </div>
        <p className="text-xs sm:text-sm text-ink-muted truncate">{user.email}</p>
        <p className="text-xs text-ink-subtle mt-1 sm:hidden">{user.phone}</p>
      </div>
    </div>
  </div>
);

export default UserCard;