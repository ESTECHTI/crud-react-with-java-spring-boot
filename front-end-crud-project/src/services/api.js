const API_URL = 'http://localhost:8080/api/users';

export const getUsers = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createUser = async (userData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  console.log('teste ' + JSON.stringify(response) )
  return response.json();
};

export const updateUser = async (id, userData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const deleteUser = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};