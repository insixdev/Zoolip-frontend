import { createContext } from "react";
import { RegisterUserResponse, UserAppRegister, UserRequest } from "./authService";
import { UserApp } from "../users/userType";

/**
 * contrato de que datos
 * funciones estaran en toda la applicacion
 * */

// 2. Crear el contexto


interface AuthContextType {
  user: UserApp | null;
  logout: () => void;
  login: (user: UserRequest) => Promise<UserApp>;
  register: (user: UserAppRegister) => Promise<RegisterUserResponse>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
