import  axios  from "axios";
import { userApp, userAppRegister } from "../user/userType";


// enum Rol {
//   USER,
//   ADMIN
// }
export type loginUserReponse = { 
  status: string,
  token: string, 
  username: string
  id: number 
}
// register type req & res

export type registerUserResponse = {
  status: string,
  message: string,
}

const api = axios.create({
  baseURL: "http://localhost/3050/api/auth"
});

export async function registerService(user: userAppRegister) {
  const res = await fetch("http://localhost:3050/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }

  const data = await res.json();
  console.log(data);
  return data;
}
export async function loginService(user: userApp){ 
  
  // hacemos la request y obtenemos la res
  const res = await api.post("/login", "hola");
  console.log(res.data)
  return res.data

}
