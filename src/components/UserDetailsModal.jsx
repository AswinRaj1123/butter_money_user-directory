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
    <div className="fixed inset-0 bg-ink/40 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4" onClick={onClose}>
      <div className="card shadow-modal w-full max-w-md rounded-b-none sm:rounded-b-xl max-h-[85vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 sm:p-6 border-b border-surface-200 sticky top-0 bg-white rounded-t-xl">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-surface-200 flex items-center justify-center text-ink-muted font-semibold text-sm sm:text-base">
              {user.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-base sm:text-lg font-semibold text-ink truncate">{user.name}</h2>
              <p className="text-xs sm:text-sm text-ink-muted">User Details</p>
            </div>
            <button onClick={onClose} className="sm:hidden w-8 h-8 rounded-full bg-surface-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
          {details.map(({ label, value }) => (
            <div key={label} className="flex justify-between items-start gap-4">
              <span className="text-xs sm:text-sm text-ink-muted flex-shrink-0">{label}</span>
              <span className="text-xs sm:text-sm text-ink text-right break-all">{value}</span>
            </div>
          ))}
        </div>
        <div className="p-3 sm:p-4 border-t border-surface-200 sticky bottom-0 bg-white">
          <button onClick={onClose} className="btn-secondary w-full">Close</button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;