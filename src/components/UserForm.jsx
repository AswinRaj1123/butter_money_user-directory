/**
 * UserForm Component
 * 
 * Collapsible form for adding new users to the directory.
 * Uses react-hook-form for validation and form state management.
 * 
 * Props:
 * @param {Function} onAddUser - Callback with new user data when form is submitted
 * 
 * Features:
 * - Collapsible accordion UI to save space
 * - Client-side validation (required fields, email format)
 * - Form resets after successful submission
 * - Responsive grid layout (stacked on mobile, 3 columns on desktop)
 */

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Icon from './Icon';

// Regex pattern for basic email validation
const EMAIL_PATTERN = /^\S+@\S+$/i;

/**
 * Creates a new user object with default empty fields
 * @param {Object} data - Form data (name, email, phone)
 * @returns {Object} Complete user object with generated ID
 */
const createEmptyUser = (data) => ({
  id: Date.now(), // Simple unique ID using timestamp
  ...data,
  address: { street: '', city: '' },
  company: { name: '' },
  website: '',
});

/**
 * FormField - Reusable input field with error display
 */
const FormField = ({ name, register, rules, errors, placeholder }) => (
  <div>
    <input
      {...register(name, rules)}
      placeholder={placeholder}
      className="input-field text-sm sm:text-base"
      aria-label={placeholder}
    />
    {/* Show validation error message if field has error */}
    {errors[name] && <p className="text-danger text-xs mt-1">{errors[name].message}</p>}
  </div>
);

const UserForm = ({ onAddUser }) => {
  // Controls whether the form is expanded or collapsed
  const [isOpen, setIsOpen] = useState(false);
  
  // react-hook-form setup
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  /**
   * Handles form submission
   * Creates new user, resets form, and collapses the accordion
   */
  const handleFormSubmit = (data) => {
    onAddUser(createEmptyUser(data));
    reset();
    setIsOpen(false);
  };

  // Toggle accordion open/close
  const toggleOpen = () => setIsOpen((prev) => !prev);

  // Form field configuration - makes it easy to add/modify fields
  const fields = [
    { name: 'name', placeholder: 'Name', rules: { required: 'Required' } },
    { name: 'email', placeholder: 'Email', rules: { required: 'Required', pattern: { value: EMAIL_PATTERN, message: 'Invalid email' } } },
    { name: 'phone', placeholder: 'Phone', rules: { required: 'Required' } },
  ];

  return (
    <div className="card mb-6">
      <button onClick={toggleOpen} className="w-full p-4 flex items-center justify-between text-left">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-success/10 flex items-center justify-center">
            <Icon name="plus" className="w-5 h-5 text-success" />
          </div>
          <span className="font-medium text-ink">Add New User</span>
        </div>
        <Icon name="chevronDown" className={`w-5 h-5 text-ink-subtle ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="px-3 sm:px-4 pb-4 pt-2 border-t border-surface-200">
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
            {fields.map((field) => (
              <FormField key={field.name} {...field} register={register} errors={errors} />
            ))}
          </div>
          <div className="mt-4 flex justify-end">
            <button type="submit" className="btn-success w-full sm:w-auto">Add User</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UserForm;