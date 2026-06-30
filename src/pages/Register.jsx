import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    passwd: "",
  });

  const [cpasswd, setCpasswd] = useState('')

  const { register, error, setError } = useAuth();
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const hasEmptyField = Object.values(formData).some(
      (value) => value.trim() === "",
    );

    if (hasEmptyField) {
      setError("All fields are required");
      return
    }
    if (formData.passwd.length < 8) {
      setError("password must be 8 or more charectors");
      setFormData.passwd("");
      return;
    }

    if(formData.passwd !== cpasswd){
      setError("passwords didn't match")
      return;
    }


    const res = await register(formData);
    if (!res.success) {
      setFormData({
        name: "",
        email: "",
        passwd: "",
      });
      return;
    }
    navigate('/')
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h1 className="text-2xl fond-bold mb-6 text-center">Register</h1>
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
            value={cpasswd}
            onChange={(e) => setCpasswd(e.target.value)}
            placeholder="Confirm Password"
          />
          <p className="text-red-600 text-center">{error}</p>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-blue-600 w-20 text-white rounded-2xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
