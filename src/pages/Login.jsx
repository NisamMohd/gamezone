import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [error, setError] = useState("");
  return (
    <div>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
        />
        <input
          type="password"
          value={Passwd}
          onChange={(e) => setPasswd(e.target.value)}
          placeholder="Password"
        />
        <div>
          <p>{error}</p>
        </div>
        <button>Register</button>
      </div>
    </div>
  );
}

export default Login;
