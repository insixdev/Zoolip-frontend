import  axios  from "axios";
import { userApp } from "../user/userType";

export type userRequest = {
  username: string
  password: string
}

export type userReponse = {
  status: string,
  token: string, 
  username: string
  id: number 
}


const api = axios.create({
  baseURL: "http://localhost/3050/api/auth/"
});

export async function loginService(user: userApp){ 
  const res = await api.post("/login", user);

  console.log(res.data)
  return res.data

}
