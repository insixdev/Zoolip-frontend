// AuthContext.tsx
import { createContext } from "react";
import { userApp } from '../user/userType.ts'

/**
 * contrato de que datos
 * funciones estaran en toda la applicacion
 * */

// 2. Crear el contexto


interface AuthContextType {
  user: userApp | null;
  login: (user: userApp) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
