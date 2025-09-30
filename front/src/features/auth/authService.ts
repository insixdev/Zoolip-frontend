
// enum Rol {
//   USER,
//   ADMIN
// }

import { UserApp} from "../users/userType";

/** url base*/
const url = "http://localhost:3050/" 

export type UserRequest = {
  username: string,
  password: string,
}
// register type req & res
export type RegisterUserResponse = {
  status: string,
  message: string,
}

export type UserAppRegister = {
  username: string;
  password: string;
  rol?: string;
}

export async function registerService(user: UserAppRegister): Promise<RegisterUserResponse> {
  const res = await fetch(`${url}api/auth/register`, { 
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)

  });

  const data: RegisterUserResponse = await res.json();
  console.log(data);
  return data;
}

export async function loginService(user: UserRequest): Promise<UserApp> { 
  // hacemos la request y obtenemos la res
  const res = await fetch(`${url}api/auth/login`, { method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }
  // no hacerlo doble retronar todo bien 
  // body todo 
  // implementar las nuevas types
  const data: UserApp= await res.json();
  // const tokenHeader = res.headers.get("Authorization");
  // const userIdHeader = response.headers.get("Id-Usuario");
  
  // const result: LoginResponseFull = {
  //   body: data,
  //   headers: {
  //     authorization: tokenHeader ?? undefined,
  //     idUsuario: userIdHeader ?? undefined
  //   }
  //
  // }

  return data;

}

