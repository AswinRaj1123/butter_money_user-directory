const ErrorMessage = ({ message }) => (
  <div className="card bg-danger-light border-danger/20 p-6 text-center">
    <div className="w-10 h-10 rounded-full bg-danger/10 mx-auto mb-3 flex items-center justify-center">
      <svg className="w-5 h-5 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <p className="text-danger text-sm">{message}</p>
  </div>
);

export default ErrorMessage;