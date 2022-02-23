import axios from "axios";
import {BASE_URL} from "../constants/urls";
import {goToFeed }from "../routes/Coordinator";


export const login = (form, clear, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/login`, form)
    .then((res)=>{
        localStorage.setItem("token", res.data.token);
        clear();
        setRightButtonText("Logout")
        goToFeed(navigate)
    })
    .catch((error)=>alert (error.response.data.message))
}

export const signup = (form, clear, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/signup`, form)
    .then((res)=>{
        localStorage.setItem("token", res.data.token);
        clear();
        setRightButtonText("Logout")
        goToFeed(navigate)
    })
    .catch((error)=>alert("Usuário ou senha incorretos!"))
}

