import axios from "axios";
import { createContext } from "react";


const AuthContext = createContext()

export function AuthProvider({ children }){
    async function login(credentials){

        try{
            const res = await axios.get(
                `http://localhost:3001/users?email=${credentials.email}&password=${credentials.passwd}`
            )

            const data = res.data

            if(data.length > 0){
                const loggedUser = data[0]
            }
        }catch(err){
            alert(err.message)
        }
    return(
        <AuthContext.Provider
        value={{
            login
        }}
        >
            {children}
        </AuthContext.Provider>
    )}
}