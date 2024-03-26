import { dataTagSymbol } from "@tanstack/react-query";
import axios from "axios";

export const signup = async ({name, email, password}) => {
    try {
        const {data} = await axios.post('/api/users/register', {
            name,
            email,
            password,
        });
        return data;
    } catch {error} {
        if (error.response && error.response.data.message) 
         throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
}