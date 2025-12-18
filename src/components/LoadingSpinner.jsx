const LoadingSpinner = ({ message = 'Loading...' }) => (
  <div className="card p-8 sm:p-12 text-center">
    <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-surface-300 border-t-accent rounded-full mx-auto mb-3 animate-spin" />
    <p className="text-ink-muted text-xs sm:text-sm">{message}</p>
  </div>
);

export default LoadingSpinner;