import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext()

export function AuthProvider({ children }){
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    
    
    const [user, setUser] = useState(()=>{
        const stored = localStorage.getItem("user")
        return stored ? JSON.parse(stored) : null
    })

    async function register(userinfo) {
    setIsLoading(true);
    setError("");

    try {
        const res = await axios.get(
            `http://localhost:3001/users?email=${userinfo.email}`
        );

        const isUserExist = res.data;

        if (isUserExist.length > 0) {
            setError("Email already exists. Try logging in.");
            return { success: false };
        }

        const reg = await axios.post(
            "http://localhost:3001/users",
            {
                ...userinfo,
                createdAt: new Date().toISOString(),
            }
        );

        const newUser = reg.data;

        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        

        return { success: true };
    } catch (err) {
        setError(err.message || "Registration failed");
        return { success: false };
    } finally {
        setIsLoading(false);
    }

    }

   async function login({ email, passwd }) {
    setIsLoading(true);
    setError("");

    try {
        const res = await axios.get(
            `http://localhost:3001/users?email=${email}&passwd=${passwd}`
        );

        const data = res.data;

        if (data.length === 0) {
            setError("Invalid email or password");
            return { success: false };
        }

        const loggedUser = data[0];

        setUser(loggedUser);
        localStorage.setItem("user", JSON.stringify(loggedUser));

        return { success: true };

    } catch (err) {
        setError(err.message || "Login failed");
        return { success: false };
    } finally {
        setIsLoading(false);
    }
}

function logout(){
    setUser(null)
    localStorage.removeItem("user")
}
    
    return(
        <AuthContext.Provider
        value={{
            user,
            error,
            isLoading,
            setError,
            login,
            register,
            logout
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}