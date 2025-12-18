const UserCard = ({ user, onClick }) => (
  <div
    className="border border-gray-300 rounded-lg p-4 mb-4 hover:bg-gray-50 cursor-pointer transition"
    onClick={onClick}
  >
    <h3 className="text-lg font-semibold">{user.name}</h3>
    <p className="text-gray-700">Email: {user.email}</p>
    <p className="text-gray-700">Phone: {user.phone}</p>
  </div>
);

export default UserCard;