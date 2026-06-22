import axios from "axios";

export const registerApi = async (data) => {
    try {
        const res = await axios.post(`http://localhost:3001/users`,data )
        return res.data
    } catch (error) {
        console.log(error.message)
    }

}