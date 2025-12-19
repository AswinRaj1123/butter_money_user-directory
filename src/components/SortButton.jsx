/**
 * SortButton Component
 * 
 * Toggle button for switching between ascending (A-Z) and descending (Z-A) sort order.
 * Displays current sort direction with an icon.
 * 
 * Props:
 * @param {boolean} ascending - Current sort direction (true = A-Z, false = Z-A)
 * @param {Function} onClick - Callback to toggle sort direction
 */

import Icon from './Icon';

const SortButton = ({ ascending, onClick }) => (
  <button onClick={onClick} className="btn-secondary whitespace-nowrap">
    <Icon name="sort" className="w-4 h-4 mr-2" />
    {/* Display current sort direction */}
    {ascending ? 'A → Z' : 'Z → A'}
  </button>
);

export default SortButton;
