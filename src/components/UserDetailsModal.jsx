import Avatar from './Avatar';
import Icon from './Icon';
import { formatAddress, valueOrFallback } from '../utils';

const DetailRow = ({ label, value }) => (
  <div className="flex justify-between items-start gap-4">
    <span className="text-xs sm:text-sm text-ink-muted flex-shrink-0">{label}</span>
    <span className="text-xs sm:text-sm text-ink text-right break-all">{value}</span>
  </div>
);

const UserDetailsModal = ({ user, onClose }) => {
  if (!user) return null;

  const { name, email, phone, address, company, website } = user;

  const details = [
    { label: 'Email', value: email },
    { label: 'Phone', value: phone },
    { label: 'Address', value: formatAddress(address) },
    { label: 'Company', value: valueOrFallback(company?.name) },
    { label: 'Website', value: valueOrFallback(website) },
  ];

  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 bg-ink/40 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="card shadow-modal w-full max-w-md rounded-b-none sm:rounded-b-xl max-h-[85vh] overflow-auto"
        onClick={stopPropagation}
      >
        <header className="p-4 sm:p-6 border-b border-surface-200 sticky top-0 bg-white rounded-t-xl">
          <div className="flex items-center gap-3 sm:gap-4">
            <Avatar name={name} size="md" />
            <div className="flex-1 min-w-0">
              <h2 className="text-base sm:text-lg font-semibold text-ink truncate">{name}</h2>
              <p className="text-xs sm:text-sm text-ink-muted">User Details</p>
            </div>
            <button
              onClick={onClose}
              className="sm:hidden w-8 h-8 rounded-full bg-surface-100 flex items-center justify-center"
              aria-label="Close"
            >
              <Icon name="close" className="w-5 h-5 text-ink-muted" />
            </button>
          </div>
        </header>

        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
          {details.map(({ label, value }) => (
            <DetailRow key={label} label={label} value={value} />
          ))}
        </div>

        <footer className="p-3 sm:p-4 border-t border-surface-200 sticky bottom-0 bg-white">
          <button onClick={onClose} className="btn-secondary w-full">Close</button>
        </footer>
      </div>
    </div>
  );
};

export default UserDetailsModal;