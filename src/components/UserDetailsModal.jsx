/**
 * UserDetailsModal Component
 * 
 * Displays detailed information about a selected user in a modal overlay.
 * Responsive design: bottom sheet on mobile, centered modal on desktop.
 * 
 * Props:
 * @param {Object} user - User object with full details
 * @param {Function} onClose - Callback to close the modal
 * 
 * Features:
 * - Click outside to close
 * - Mobile: Slides up from bottom with drag handle
 * - Desktop: Centered with rounded corners
 * - Sticky header and footer for scrollable content
 */

import Avatar from './Avatar';
import Icon from './Icon';
import { formatAddress, valueOrFallback } from '../utils';

/**
 * DetailRow - Helper component for displaying label-value pairs
 */
const DetailRow = ({ label, value }) => (
  <div className="flex justify-between items-start gap-4">
    <span className="text-xs sm:text-sm text-ink-muted flex-shrink-0">{label}</span>
    <span className="text-xs sm:text-sm text-ink text-right break-all">{value}</span>
  </div>
);

const UserDetailsModal = ({ user, onClose }) => {
  // Don't render if no user selected
  if (!user) return null;

  // Destructure user properties
  const { name, email, phone, address, company, website } = user;

  // Define the details to display in the modal
  const details = [
    { label: 'Email', value: email },
    { label: 'Phone', value: phone },
    { label: 'Address', value: formatAddress(address) },
    { label: 'Company', value: valueOrFallback(company?.name) },
    { label: 'Website', value: valueOrFallback(website) },
  ];

  // Prevent modal from closing when clicking inside the modal content
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 bg-ink/40 flex items-end sm:items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white shadow-modal w-full sm:max-w-md sm:rounded-xl sm:m-4 max-h-[90vh] sm:max-h-[85vh] overflow-auto rounded-t-2xl"
        onClick={stopPropagation}
      >
        <header className="p-4 sm:p-6 border-b border-surface-200 sticky top-0 bg-white rounded-t-2xl sm:rounded-t-xl">
          {/* Mobile drag handle */}
          <div className="w-10 h-1 bg-surface-300 rounded-full mx-auto mb-4 sm:hidden" />
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

        <div className="p-4 sm:p-6 space-y-4">
          {details.map(({ label, value }) => (
            <DetailRow key={label} label={label} value={value} />
          ))}
        </div>

        <footer className="p-4 border-t border-surface-200 sticky bottom-0 bg-white pb-6 sm:pb-4">
          <button onClick={onClose} className="btn-secondary w-full">Close</button>
        </footer>
      </div>
    </div>
  );
};

export default UserDetailsModal;