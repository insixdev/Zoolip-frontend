import React, {  useState, ReactNode } from "react";
import {AuthContext } from './authContext.ts'
import type { userApp, userAppRegister } from "@/features/users";
import { loginService, registerService } from "./authService.ts";


// 3. Props del provider
interface AuthProviderProps {
  children: ReactNode;
}

// 4. Provider
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<userApp| null>(null);

  const login = async (user: userApp) => { 
    const loggedUser = await loginService(user)
    setUser(loggedUser)
  }
  const logout = () => setUser(null);

  const register = async (user: userAppRegister) => {
    const newUser = await registerService(user); 
    setUser(newUser)

  };
  return (
    <AuthContext.Provider value={{user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

