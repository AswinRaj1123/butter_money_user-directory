import { useState } from 'react';
import { useForm } from 'react-hook-form';

const UserForm = ({ onAddUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    onAddUser({
      id: Date.now(),
      ...data,
      address: { street: '', city: '' },
      company: { name: '' },
      website: '',
    });
    reset();
    setIsOpen(false);
  };

  return (
    <div className="card mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-success/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <span className="font-medium text-ink">Add New User</span>
        </div>
        <svg className={`w-5 h-5 text-ink-subtle ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <form onSubmit={handleSubmit(onSubmit)} className="px-4 pb-4 pt-2 border-t border-surface-200">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <input {...register('name', { required: 'Required' })} placeholder="Name" className="input-field" />
              {errors.name && <p className="text-danger text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <input {...register('email', { required: 'Required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })} placeholder="Email" className="input-field" />
              {errors.email && <p className="text-danger text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <input {...register('phone', { required: 'Required' })} placeholder="Phone" className="input-field" />
              {errors.phone && <p className="text-danger text-xs mt-1">{errors.phone.message}</p>}
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button type="submit" className="btn-success">Add User</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UserForm;