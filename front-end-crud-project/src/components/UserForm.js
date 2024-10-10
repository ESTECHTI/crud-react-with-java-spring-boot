import React, { useState, useEffect } from 'react';
import { createUser, updateUser } from '../services/api';

function UserForm({ onSubmit, initialData }) {
  // Garante que initialData sempre seja um objeto
  const safeInitialData = initialData || { name: '', email: '' };

  const [formData, setFormData] = useState({
    name: safeInitialData.name || '',
    email: safeInitialData.email || ''
  });

  useEffect(() => {
    setFormData({
      name: (initialData && initialData.name) || '',
      email: (initialData && initialData.email) || ''
    });
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (initialData && initialData.id) {
        // Atualizando um usuário existente
        response = await updateUser(initialData.id, formData);
      } else {
        // Criando um novo usuário
        response = await createUser(formData);
      }

      console.log('User created/updated:', response);

      // Chame onSubmit com os dados retornados pela API
      onSubmit(response.id, response);

      // Limpar o formulário
      setFormData({ name: '', email: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      // Adicionar lógica para exibir mensagem de erro
    }
  };

  return (
    <form className="max-w-md mx-auto p-4 border border-gray-300 rounded" onSubmit={handleSubmit}>
      <input
        className="w-full p-2 mb-2 border border-gray-300 rounded"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        className="w-full p-2 mb-2 border border-gray-300 rounded"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" type="submit">
        {initialData && initialData.id ? 'Update' : 'Create'} User
      </button>
    </form>
  );
}

export default UserForm;
