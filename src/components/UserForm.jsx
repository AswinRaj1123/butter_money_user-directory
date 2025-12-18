import { useForm } from 'react-hook-form';

const UserForm = ({ onAddUser }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newUser = {
      id: Date.now(),  // Simple fake ID
      ...data,
      address: { street: '', city: '' },  // Minimal to avoid errors later
      company: { name: '' },
      website: '',
    };
    onAddUser(newUser);
    reset();
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4">Add New User</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email format',
              },
            })}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <input
            {...register('phone', { required: 'Phone is required' })}
            placeholder="Phone"
            className="w-full p-3 border border-gray-300 rounded"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserForm;