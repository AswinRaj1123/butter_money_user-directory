import Icon from './Icon';

const EmptyState = ({ icon = 'users', message = 'No items found' }) => (
  <div className="card p-8 sm:p-12 text-center">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-200 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
      <Icon name={icon} className="w-5 h-5 sm:w-6 sm:h-6 text-ink-subtle" strokeWidth={1.5} />
    </div>
    <p className="text-ink-muted text-sm sm:text-base">{message}</p>
  </div>
);

export default EmptyState;
