// tambien el user request de nuestra app el que ingrea y luego 
// se hace la request
export type userApp = {
  username: string | null;
  password: string | null;
}

export type userAppRegister = {
  username: string | null;
  password: string | null;
  rol?: string;
}
