import { getInitials } from '../utils';

const SIZES = {
  sm: 'w-10 h-10 sm:w-11 sm:h-11 text-xs sm:text-sm',
  md: 'w-12 h-12 sm:w-14 sm:h-14 text-sm sm:text-base',
};

const Avatar = ({ name, size = 'sm' }) => (
  <div
    className={`${SIZES[size]} rounded-full bg-surface-200 flex items-center justify-center text-ink-muted font-medium flex-shrink-0`}
  >
    {getInitials(name)}
  </div>
);

export default Avatar;
