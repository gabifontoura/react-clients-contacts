
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../services/api";
import { AxiosError } from "axios";
import { iLoginFormValues } from "../pages/Login/LoginForm";
import { iRegisterFormValues } from "../pages/Register/SignUpForm";
// import { getUser } from "../services/getUser";

interface iDefaultErrorResponse {
  error: string;
}

interface iUserProviderProps {
  children: React.ReactNode;
}
export interface iUser {
  id: number;
  name: string;
  email: string;
  telephone: string;
}

interface iLoginResponse {
  token: string;
}

interface iRegisterResponse {
  accessToken: string;
  user: iUser;
}

interface iUserContext {

  userRegister: (formData: iRegisterFormValues) => void;
  userLogin: (formData: iLoginFormValues) => void;
  userLogout: () => void;
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
 
    const [globalLoading, setGlobalLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("@TOKEN");
  
      if (!token) {
        setGlobalLoading(false);
        return;
      }
  
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      setGlobalLoading(false);
    }, []);
    
      const userRegister = async (formData: iRegisterFormValues) => {
        try {
          setGlobalLoading(true);
          const response = await api.post<iRegisterResponse>("/users", formData);
            console.log(response)

        } catch (error) {
          const currentError = error as AxiosError<iDefaultErrorResponse>;
          console.log( currentError )

        } finally {
          setGlobalLoading(false);
        }
      };
    
      const userLogin = async (formData: iLoginFormValues) => {
        try {
          setGlobalLoading(true);
          const response = await api.post<iLoginResponse>("/login", formData);
          const token  = response.data.token
          console.log(response)
          api.defaults.headers.common.authorization = `Bearer ${token}`
          localStorage.setItem("@TOKEN", token);
          navigate("/dashboard");

        } catch (error) {
          const currentError = error as AxiosError<iDefaultErrorResponse>;
          console.log( currentError )

        } finally {
          setGlobalLoading(false);
        }
      }
    
      const userLogout = ()  => {
        localStorage.removeItem("@TOKEN");
        navigate("/");
      }
    

    return (
        <UserContext.Provider
          value={{
            userRegister,
            userLogin,
            userLogout,
            globalLoading,
            setGlobalLoading,
          }}
        >
          {children}
        </UserContext.Provider>
      );
}