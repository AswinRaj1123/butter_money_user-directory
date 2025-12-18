const ErrorMessage = ({ message }) => (
  <div className="card bg-danger-light border-danger/20 p-4 sm:p-6 text-center">
    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-danger/10 mx-auto mb-2 sm:mb-3 flex items-center justify-center">
      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <p className="text-danger text-xs sm:text-sm">{message}</p>
  </div>
);

export default ErrorMessage;