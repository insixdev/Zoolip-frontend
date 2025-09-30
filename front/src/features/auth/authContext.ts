// AuthContext.tsx
import { createContext } from "react";
import { userApp, userAppRegister } from '@/features/users/userType'
import { loginUserRequest, registerUserResponse } from "./authService";

/**
 * contrato de que datos
 * funciones estaran en toda la applicacion
 * */

// 2. Crear el contexto


interface AuthContextType {
  user: userApp | null;
  logout: () => void;
  login: (user: loginUserRequest) => Promise<userApp>;
  register: (user: userAppRegister) => Promise<registerUserResponse>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
