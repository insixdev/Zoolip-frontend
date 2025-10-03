import { createContext } from "react";
import { RegisterUserResponse, UserAppRegister, UserRequest } from "./authService";
import { LoginResponseFull } from "../users/userType";

/**
 * contrato de que datos
 * funciones estaran en toda la applicacion
 * */

// 2. Crear el contexto


interface AuthContextType {
  user: LoginResponseFull| null;
  logout: () => void;
  login: (user: UserRequest) => Promise<LoginResponseFull>;
  register: (user: UserAppRegister) => Promise<RegisterUserResponse>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
