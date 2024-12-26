export interface User {
  name: string;
  lastname: string;
  email: string;
  image: File | null;
  password: string;
}

export interface UserWithId {
  id: number;
  name: string;
  lastname: string;
  email: string;
  image: string | null;
  password: string;
}
