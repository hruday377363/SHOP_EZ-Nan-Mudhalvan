import bcrypt from 'bcrypt';

const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('admin456', 10),
    isAdmin: true
  },
    {
      name: 'Bunny',
      email: 'bunny@admin.com',
      password: bcrypt.hashSync('bunny', 10),
      isAdmin: true
    },
];

export default users;
