import React, {  useState, ReactNode } from "react";
import {AuthContext } from './authContext.ts'
import { userApp } from "../user/userType.ts";
import { loginService } from "./authService.ts";



// 3. Props del provider
interface AuthProviderProps {
  children: ReactNode;
}

// 4. Provider
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<userApp| null>(null);

  const login = (user: userApp) => { 
    const loggedUser = await loginService(user)
    setUser(user)
  }
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

