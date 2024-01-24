/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import big_loading from "../assets/big_loading.json";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosPublicV1 from "../Hooks/useAxiosPublicV1";
import useAxiosSecureV1 from "../Hooks/useAxiosSecureV1";
import Lottie from "lottie-react";
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthnicationContext({ children }) {
  const [CurrentUser, SetCurrentUser] = useState();
  const [loading, setloading] = useState(true);

  const navigate = useNavigate();
  const AxiosSecureV1 = useAxiosSecureV1();
  const AxiosPublicV1 = useAxiosPublicV1();

  const signout = async () => {
    await AxiosPublicV1.delete(`${import.meta.env.VITE_API_URL_V1}/logout`);
  };

  AxiosSecureV1.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        signout();
        
      }
      return Promise.reject(error);
    }
  );
  const  getCurrentUser = async () =>{
    try {
      const res = await AxiosSecureV1.get(`${import.meta.env.VITE_API_URL_V1}/user`)
      SetCurrentUser(res.data)
      setloading(false);
    } catch (err) {
     
       SetCurrentUser();
        await AxiosPublicV1.delete(
          `${import.meta.env.VITE_API_URL_V1}/logout`
        );
        setloading(false);
    }
  } 

  useEffect(()=>{
    getCurrentUser()
  },[])


  const Signup = async (username, email, password, avatar, phone, role) => {
    await AxiosPublicV1.post(`${import.meta.env.VITE_API_URL_V1}/user`, { username, email, password, avatar, phone, role, });
  };

  const SignIn = async (email, password) => {
    const res = await AxiosPublicV1.post(
      `${import.meta.env.VITE_API_URL_V1}/user/login`,
      { email, password }
    );
 
    SetCurrentUser(res.data);
    setloading(false);
  };


  return (
    <AuthContext.Provider
      value={{
        loading,
        SignIn,
        signout,
        Signup,
        setloading,
        CurrentUser,
        SetCurrentUser,
        getCurrentUser
      }}
    >
      {!loading && children}
      {loading &&       
      <div className=" flex justify-center min-h-screen items-center w-full">
        <Lottie
          className="md:h-[500px] h-[300px]"
          animationData={big_loading}
        ></Lottie>
      </div>}
    </AuthContext.Provider>
  );
}
