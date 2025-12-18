const UserDetailsModal = ({ user, onClose }) => {
  if (!user) return null;

  const details = [
    { label: 'Email', value: user.email },
    { label: 'Phone', value: user.phone },
    { label: 'Address', value: `${user.address.street}${user.address.city ? ', ' + user.address.city : ''}` || '—' },
    { label: 'Company', value: user.company.name || '—' },
    { label: 'Website', value: user.website || '—' },
  ];

  return (
    <div className="fixed inset-0 bg-ink/40 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="card shadow-modal w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 border-b border-surface-200">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-surface-200 flex items-center justify-center text-ink-muted font-semibold">
              {user.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-ink">{user.name}</h2>
              <p className="text-sm text-ink-muted">User Details</p>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-4">
          {details.map(({ label, value }) => (
            <div key={label} className="flex justify-between items-start">
              <span className="text-sm text-ink-muted">{label}</span>
              <span className="text-sm text-ink text-right max-w-[60%]">{value}</span>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-surface-200">
          <button onClick={onClose} className="btn-secondary w-full">Close</button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;