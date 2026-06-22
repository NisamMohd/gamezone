import React, { useState } from "react";
import { registerApi } from "../services/users";
import Login from "./Login";


function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    passwd: "",
    cpasswd: "",
  });
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

      e.preventDefault();


    if(!formData.name){
        setError("All fields are required")
        return error
    }
    if(!formData.email){
        setError("All fields are required")
        return error
    }
    if(!formData.passwd){
        setError("All fields are required")
        return error
    }
    if(!formData.cpasswd){
        setError("All fields are required")
        return error
    }
    if(formData.passwd != formData.cpasswd){
        setError("Passwords should be match")
        return error
    }
  const res=  registerApi(formData)

  console.log('kkkkkkkkkk',res);
  

  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        className="border border-gray-400 rounded pl-2"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        className="border border-gray-400 rounded pl-2"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="example@email.com"
      />

      <input
        className="border border-gray-400 rounded pl-2"
        type="password"
        name="passwd"
        value={formData.passwd}
        onChange={handleChange}
        placeholder="Password"
      />

      <input
        className="border border-gray-400 rounded pl-2"
        type="password"
        name="cpasswd"
        value={formData.cpasswd}
        onChange={handleChange}
        placeholder="Confirm Password"
      />
      <p>{error}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Register;