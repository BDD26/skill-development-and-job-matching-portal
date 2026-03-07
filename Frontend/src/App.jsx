import React, { useRef } from 'react';
import UserList from './components/UserList';
import './App.css';
import AddUser from './components/AddUser';

function App() {
  const userListRef = useRef();

  const handleUserAdded = () => {
    userListRef.current?.refreshUsers();
  };

  return (
    <div className="App">
      <AddUser onUserAdded={handleUserAdded} />
      <UserList ref={userListRef} />
    </div>
  );
}

export default App;
