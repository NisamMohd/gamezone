import React, { useState } from "react";
import {useAuth} from '../context/AuthContext'
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const navigate = useNavigate()
  const {login,error,setError} = useAuth()

  async function handlesubmit (){
    setError('')
    if(passwd.length < 8){
      setError('Password must be 8 charector or longer')
      return
    }
    const res = await login({email,password:passwd})
    
    if(!res.success){
      setEmail('')
      setPasswd('')
      return
    }else{
      navigate('/home')
    }
  }


  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h1 className="text-2xl fond-bold mb-6 text-center">Login</h1>
        <div className="flex flex-col gap-4">
          <input
            className="border border-grey-400 rounded pl-2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
          />
          <input
            className="border border-grey-400 rounded pl-2"
            type="password"
            value={passwd}
            onChange={(e) => setPasswd(e.target.value)}
            placeholder="Password"
          />

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
          <button 
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            onClick={handlesubmit}
          >Login</button>
          <Link to="/register">don't have an account? register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
