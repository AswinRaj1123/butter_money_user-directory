/**
 * Icon Component
 * 
 * Reusable SVG icon component using Heroicons paths.
 * Centralizes all icons in one place for consistency.
 * 
 * Props:
 * @param {string} name - Icon name (must match a key in ICONS object)
 * @param {string} className - CSS classes for sizing and color
 * @param {number} strokeWidth - SVG stroke width (default: 2)
 * 
 * Available icons: sort, search, plus, chevronDown, close, users, alert
 */

// SVG path data for each icon (from Heroicons)
const ICONS = {
  sort: 'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4',
  search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  plus: 'M12 4v16m8-8H4',
  chevronDown: 'M19 9l-7 7-7-7',
  close: 'M6 18L18 6M6 6l12 12',
  users: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  alert: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
};

const Icon = ({ name, className = 'w-5 h-5', strokeWidth = 2 }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d={ICONS[name]} />
  </svg>
);

export default Icon;
