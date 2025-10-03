
// enum Rol {
//   USER,
//   ADMIN
// }

import { LoginResponseFull, LoginResponseHeaders, UserApp} from "../users/userType";

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

export async function loginService(user: UserRequest): Promise<LoginResponseFull> { 
  try {
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

    console.log(res)
    const body: UserApp = await res.json();
    const headers: LoginResponseHeaders = {
      authorization: res.headers.get('Authorization') ?? undefined,
      idUsuario: res.headers.get('Id-Usuario') ?? undefined,
      Username: res.headers.get("Nombre-Usuario") ?? undefined,
    }
    console.log(headers)
    const finalRes: LoginResponseFull = {body, headers} 
    return finalRes;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }

}

