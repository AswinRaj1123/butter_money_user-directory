const UserDetailsModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
        <p className="mb-2"><strong>Email:</strong> {user.email}</p>
        <p className="mb-2"><strong>Phone:</strong> {user.phone}</p>
        <p className="mb-2"><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
        <p className="mb-2"><strong>Company:</strong> {user.company.name}</p>
        <p className="mb-4"><strong>Website:</strong> {user.website}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserDetailsModal;