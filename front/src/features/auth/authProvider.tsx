import React, {  useState, ReactNode } from "react";
import {AuthContext } from './authContext.ts'



// 3. Props del provider
interface AuthProviderProps {
  children: ReactNode;
}

// 4. Provider
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<string | null>(null);

  const login = (username: string, password: string) => setUser(username);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

