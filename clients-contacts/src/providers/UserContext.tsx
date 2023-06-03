
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { AxiosError } from "axios";
import { iLoginFormValues } from "../pages/Login/LoginForm";
import { iRegisterFormValues } from "../pages/Register/SignUpForm";
import { Contact } from "../pages/Dashboard";


interface iDefaultErrorResponse {
  error: string;
}

interface iUserProviderProps {
  children: React.ReactNode;
}
export interface iUser {
  id: number;
  name: string ;
  email: string ;
  telephone: string ;
}

interface iLoginResponse {
  token: string;
  user: iUser;
}

interface iRegisterResponse {
  accessToken: string;
  user: iUser;
}


interface iUserContext {
  user: iUser | null;
  setUser:React.Dispatch<React.SetStateAction<iUser|null>>;
  userRegister: (formData: iRegisterFormValues) => void;
  userLogin: (formData: iLoginFormValues) => void;
  userLogout: () => void;
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isModalUpdateVisible: boolean | null;
  setIsModalUpdateVisible: React.Dispatch<React.SetStateAction<boolean | null>>;
  isModalAddContactVisible: boolean | null;
  setIsModalAddContactVisible: React.Dispatch<React.SetStateAction<boolean | null>>;
  updateUser: (formData: iUser) => void;
  deleteUser: () => void;
  addContact: (formData: Contact)  => void;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
 
    const [globalLoading, setGlobalLoading] = useState(false);
    const [user, setUser] = useState<iUser | null>(null);
    const [isModalUpdateVisible, setIsModalUpdateVisible] = useState<boolean | null>(null);
    const [isModalAddContactVisible, setIsModalAddContactVisible] = useState<boolean | null>(null);
    

    const token = localStorage.getItem("@TOKEN");
    const userID = localStorage.getItem("@USERid");
    
    const navigate = useNavigate();

    useEffect(()=> {
      (async () => {
          if(token){
            try {
              setGlobalLoading(true)
              api.defaults.headers.common.authorization = `Bearer ${token}`
              const response = await api.get(`/users/${userID}`)
              setUser(response.data);
              navigate("/dashboard")

            } catch (error) {
              console.log(error)
            }finally{
              setGlobalLoading(false)
            }
          }
      })()
    }, [])


  const userRegister = async (formData: iRegisterFormValues) => {
    try {
      setGlobalLoading(true);
      const response = await api.post<iRegisterResponse>("/users", formData);
        console.log(response.statusText)

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
      const userID = response.data.user.id

      api.defaults.headers.common.authorization = `Bearer ${token}`
      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@USERid", `${userID}`);
      setUser(response.data.user)
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
    localStorage.removeItem("@USERid");
    navigate("/");
  }

  const updateUser = async (formData: iUser | null) => {

    try {
     
      const user = await api.get(`/users/${userID}`)
      let updatedName = formData?.name;
      let updatedEmail = formData?.email;
      let updatedPhone = formData?.telephone;

      if(updatedName === ""){
        updatedName = user.data.name
      }
      if(updatedEmail === ""){
        updatedEmail = user.data.email
      }
      if(updatedPhone === ""){
        updatedPhone = user.data.telephone
      }

      const updatedFormData = {
        name: updatedName,
        email: updatedEmail,
        telephone: updatedPhone
      };
      
      const response = await api.patch(`/users/${userID}`, updatedFormData,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setGlobalLoading(true);
      setUser(response.data)
      setIsModalUpdateVisible(false);
  
      } catch (error) {
        console.log(error)
      } finally {
        setGlobalLoading(false);
      }
    }

      
  const deleteUser = async () => {
    try {
      await api.delete(`/users/${userID}`);
      userLogout();
    } catch (error) {
      console.log(error);

    }
  };

        
  const addContact = async (formData: Contact) => {
    try {
      const response =  await api.post(`/users/${userID}/contacts`, formData);
      console.log(response)
      setIsModalAddContactVisible(false)
    } catch (error) {
      console.log(error);

    }
  };

    

    return (
        <UserContext.Provider
          value={{
            user,
            setUser,
            userRegister,
            userLogin,
            userLogout,
            globalLoading,
            setGlobalLoading,
            isModalUpdateVisible,
            setIsModalUpdateVisible,
            updateUser, 
            deleteUser,
            setIsModalAddContactVisible,
            isModalAddContactVisible,
            addContact
          }}
        >
          {children}
        </UserContext.Provider>
      );


}

