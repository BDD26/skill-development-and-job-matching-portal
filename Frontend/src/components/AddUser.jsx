import React, { useState } from 'react';
import { createUser } from '../services/api';

const AddUser = ({ onUserAdded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending the request to Backend
      const response = await createUser({ name, email });
      console.log('Saved to MongoDB:', response.data);
      
      // Clear inputs and refresh the list
      setName('');
      setEmail('');
      onUserAdded(); 
    } catch (error) {
      console.error('Sync failed:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        
        {/* Name Field */}
        <div>
          <label htmlFor="name-input" style={{ display: 'block' }}>Full Name</label>
          <input 
            id="name-input"
            name="name"      // Fixes the "neither id nor name" warning
            type="text"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter name" 
            required
            autoComplete="name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email-input" style={{ display: 'block' }}>Email Address</label>
          <input 
            id="email-input"
            name="email"     // Fixes the "neither id nor name" warning
            type="email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter email" 
            required
            autoComplete="email"
          />
        </div>

        <button type="submit" style={{ cursor: 'pointer', padding: '8px' }}>
          Add to Database
        </button>
      </form>
    </div>
  );
};

export default AddUser;