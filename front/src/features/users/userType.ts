// tambien el user request de nuestra app el que ingrea y luego 
// se hace la request

export type UserApp= {
  status: string,
  token: string,
  username: string,
  id: number
}

// Si quieres juntar body + headers:
export type LoginResponseFull = {
  body: UserApp;
  headers: LoginResponseHeaders;
};
export type LoginResponseHeaders = {
  authorization?: string;
  idUsuario?: string;
}


