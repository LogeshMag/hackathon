import React, { useState } from 'react';
import '../src/App.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    aadhar: '',
    roomNo: '',
    phoneNo: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <center><h2>REGISTRATION FORM</h2></center>
      <label>
        Name :
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br/>
      <label>
        Email :
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <br/>
      <label>
        Password :
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </label>
      <br/>
      <label>
        Aadhar No :
        <input type="text" name="aadhar" value={formData.aadhar} onChange={handleChange} required />
      </label>
      <br/>
      <label>
        Room No :
        <input type="text" name="roomNo" value={formData.roomNo} onChange={handleChange} required />
      </label>
      <br/>
      <label>
        Phone No :
        <input type="tel" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required />
      </label>
      <br/>
      <label>
        Address :
        <textarea name="address" spellCheck={false} value={formData.address} onChange={handleChange} required />
      </label>
      <button type="submit">Register Now</button>
    </form>
  );
};

export default RegistrationForm;
