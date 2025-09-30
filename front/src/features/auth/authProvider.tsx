import React, {  useState, ReactNode } from "react";
import {AuthContext } from './authContext.ts'
import type { userApp, userAppRegister } from "../../features/users/userType";
import { loginService, registerService, registerUserResponse } from "./authService.ts";


// 3. Props del provider
interface AuthProviderProps {
  children: ReactNode;
}

// 4. Provider
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<userApp| null>(null);

  const login = async (user: userApp) => { 
    const loggedUser: userApp = await loginService(user)
    setUser(loggedUser)
    return loggedUser; 
  }
  const logout = () => setUser(null);

  const register = async (user: userAppRegister) => {
    const newUser:registerUserResponse = await registerService(user); 
    return newUser; 
  };
  return (
    <AuthContext.Provider value={{user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

