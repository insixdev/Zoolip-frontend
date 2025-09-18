// AuthContext.tsx
import { createContext } from "react";
/**
 * contrato de que datos
 * funciones estaran en toda la applicacion
 * */

// 2. Crear el contexto


interface AuthContextType {
  user: string | null;
  login: (username: string ) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
