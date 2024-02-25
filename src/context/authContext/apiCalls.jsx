import axios from "axios"
import { loginFailure, loginStart, loginSuccess, logoutStart } from "./AuthAction";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
export const login = async (user,dispatch) => {
    dispatch(loginStart());
    try{
        const res = await axiosInstance.post("/auth/login", user);
        res.data.isAdmin && dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
};
export const logout = (dispatch) => {
    dispatch(logoutStart());
};