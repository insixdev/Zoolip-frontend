// AuthContext.tsx
import { createContext } from "react";
import { userApp, userAppRegister } from '@/features/users'

/**
 * contrato de que datos
 * funciones estaran en toda la applicacion
 * */

// 2. Crear el contexto


interface AuthContextType {
  user: userApp | null;
  logout: () => void;
  login: (user: userApp) => Promise<void>;
  register: (user: userAppRegister) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
