// tambien el user request de nuestra app el que ingrea y luego 
// se hace la request


export type userApp = {
  status: string,
  token: string, 
  username: string
  id: number 
}

export type userAppRegister = {
  username: string | null;
  password: string | null;
  rol?: string;
}
