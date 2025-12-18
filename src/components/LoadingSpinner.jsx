const LoadingSpinner = () => (
  <div className="card p-12 text-center">
    <div className="w-8 h-8 border-2 border-surface-300 border-t-accent rounded-full mx-auto mb-3 animate-spin" />
    <p className="text-ink-muted text-sm">Loading users...</p>
  </div>
);

export default LoadingSpinner;