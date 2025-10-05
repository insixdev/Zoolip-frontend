import React, {  useState, ReactNode, useEffect } from "react";
import {AuthContext } from './authContext.ts'
import type { LoginResponseFull } from "../../features/users/userType";
import { loginService, registerService, RegisterUserResponse, UserAppRegister, UserRequest } from "./authService.ts";


// 3. Props del provider
interface AuthProviderProps {
  children: ReactNode;
}

// 4. Provider

export function AuthProvider({ children }: AuthProviderProps) {

  const [user, setUser] = useState<LoginResponseFull | null>(null);
  const [token, setToken] = useState<string | null>(null);
  // recontruir al usuario cuando se monta el componente
  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch("/api/me", { credentials: "include" });
        if (res.ok) {
          const user = await res.json();
          setUser(user); 
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      }
    };

    checkSession();
  }, []);
  const login = async (userCredentials: UserRequest) => {
    try {
      const loggedUser: LoginResponseFull = await loginService(userCredentials);
      setUser(loggedUser);
      setToken(loggedUser.headers.authorization ?? null) 
      return loggedUser;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  const register = async (user: UserAppRegister): Promise<RegisterUserResponse> => {
    const info: RegisterUserResponse = await registerService(user);
    return info;
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

