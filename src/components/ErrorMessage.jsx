import Icon from './Icon';

const ErrorMessage = ({ message }) => (
  <div className="card bg-danger-light border-danger/20 p-4 sm:p-6 text-center" role="alert">
    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-danger/10 mx-auto mb-2 sm:mb-3 flex items-center justify-center">
      <Icon name="alert" className="w-4 h-4 sm:w-5 sm:h-5 text-danger" />
    </div>
    <p className="text-danger text-xs sm:text-sm">{message}</p>
  </div>
);

export default ErrorMessage;