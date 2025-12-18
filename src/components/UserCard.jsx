const UserCard = ({ user, onClick }) => (
  <div onClick={onClick} className="card p-5 mb-3 cursor-pointer hover:shadow-lifted hover:border-surface-300">
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-full bg-surface-200 flex items-center justify-center text-ink-muted font-medium text-sm">
          {user.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
        </div>
        <div>
          <h3 className="font-medium text-ink">{user.name}</h3>
          <p className="text-sm text-ink-muted">{user.email}</p>
        </div>
      </div>
      <span className="text-sm text-ink-subtle">{user.phone}</span>
    </div>
  </div>
);

export default UserCard;