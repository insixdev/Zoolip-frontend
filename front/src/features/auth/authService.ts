import { userApp, userAppRegister } from "../user/userType";

// enum Rol {
//   USER,
//   ADMIN
// }

/** url base*/
const url = "http://localhost:3050/" 

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


export async function registerService(user: userAppRegister) {
  
  const res = await fetch(`${url}api/auth/register`, { 
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  if (!res.ok) {
    throw new Error(`Error xd: ${res.status}`);
    
  }

  const data: registerUserResponse = await res.json();
  console.log(data);
  return data;
}


export async function loginService(user: userApp){ 
  // hacemos la request y obtenemos la res
  const res = await fetch(`${url}api/auth/login`, { 
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)

  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }
  const data: loginUserReponse = await res.json();
  console.log(data);
  return data;
  // const res = await api.post("/login", user);
  // console.log(res.data)
  // return res.data
  //
}

