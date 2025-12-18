export const filterUsers = (users, searchTerm) => {
  if (!searchTerm.trim()) return users;

  const lowerTerm = searchTerm.toLowerCase();
  return users.filter((user) =>
    user.name.toLowerCase().includes(lowerTerm) ||
    user.email.toLowerCase().includes(lowerTerm)
  );
};