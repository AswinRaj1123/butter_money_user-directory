const UserCard = ({ user, onClick }) => (
  <div
    className="border border-gray-200 rounded-lg p-6 mb-4 hover:bg-gray-50 cursor-pointer transition-shadow hover:shadow-md bg-white"
    onClick={onClick}
  >
    <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
    <p className="text-gray-600 mb-1">
      <strong>Email:</strong> {user.email}
    </p>
    <p className="text-gray-600">
      <strong>Phone:</strong> {user.phone}
    </p>
  </div>
);

export default UserCard;