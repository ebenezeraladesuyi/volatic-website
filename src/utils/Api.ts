import axios from "axios";
import { user } from "../types/interface";


export const url = "https://volatic-reg-be.onrender.com"
// export const url = "http://localhost:2021"

export const url2 = "https://volaticreg-be.onrender.com"



 


// register
export const registerUser = async (data : user) => {
    return await axios.post(`${url}/volatic/register`, data)
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        return err
    })
}
