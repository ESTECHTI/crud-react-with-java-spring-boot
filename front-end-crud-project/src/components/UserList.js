import React from 'react';

function UserList({ users, onEdit, onDelete }) {
  return (
    <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
      {users.map((item) => (
        <li key={item.id} className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
          <div className="flex justify-between items-center">
            <span className="text-lg">{item.name}</span>
            <div>
              <button
                onClick={() => onEdit(item.id)}
                className="text-blue-500 hover:text-blue-700 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default UserList;