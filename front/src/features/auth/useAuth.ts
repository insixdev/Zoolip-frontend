import { useContext } from "react";
import { AuthContext } from "./authContext";

/** funcion para usar el login cada vez*/
export function useAuth(){
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error("useauth must use with authProvider")
  }else {
    return ctx;

  }
}
