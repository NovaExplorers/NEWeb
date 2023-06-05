import axios from "axios";

export const getUser = async () => {
    const req = await axios({
        url: 'http://localhost:8080/getUser',
        method: 'GET',
        withCredentials: true,
        validateStatus: false
    });
  
    return req.data;
}