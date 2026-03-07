import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { getUsers } from '../services/api';

const UserList = forwardRef((props, ref) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  React.useImperativeHandle(ref, () => ({
    refreshUsers: fetchUsers,
  }));

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
});

UserList.displayName = 'UserList';
export default UserList;
