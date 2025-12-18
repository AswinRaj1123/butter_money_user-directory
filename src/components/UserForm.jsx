import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Icon from './Icon';

const EMAIL_PATTERN = /^\S+@\S+$/i;

const createEmptyUser = (data) => ({
  id: Date.now(),
  ...data,
  address: { street: '', city: '' },
  company: { name: '' },
  website: '',
});

const FormField = ({ name, register, rules, errors, placeholder }) => (
  <div>
    <input
      {...register(name, rules)}
      placeholder={placeholder}
      className="input-field text-sm sm:text-base"
      aria-label={placeholder}
    />
    {errors[name] && <p className="text-danger text-xs mt-1">{errors[name].message}</p>}
  </div>
);

const UserForm = ({ onAddUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleFormSubmit = (data) => {
    onAddUser(createEmptyUser(data));
    reset();
    setIsOpen(false);
  };

  const toggleOpen = () => setIsOpen((prev) => !prev);

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