import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { getUsers, createUser, updateUser, deleteUser } from './services/api';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const fetchedUsers = await getUsers();
    setUsers(fetchedUsers);
  };

  const handleCreateUser = async (userData) => {
    await createUser(userData);
    fetchUsers();
  };

  const handleUpdateUser = async (id, userData) => {
    await updateUser(id, userData);
    fetchUsers();
    setEditingUser(null);
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold text-center mb-8">CRUD App</h1>
    <div className="bg-white shadow-md rounded-lg p-6">
      <UserForm
        onSubmit={editingUser ? handleUpdateUser : handleCreateUser}
        initialData={editingUser}
      />
    </div>
    <div className="mt-8">
      <UserList
        users={users}
        onEdit={setEditingUser}
        onDelete={handleDeleteUser}
        className="border border-gray-300 rounded-lg shadow-sm"
      />
    </div>
  </div>
  );
}

export default App;