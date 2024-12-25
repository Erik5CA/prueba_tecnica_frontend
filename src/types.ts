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
}

export interface UserResponse {
  data: User[];
}

export interface UserResponseError {
  message: string;
}

export interface UserResponseSuccess {
  data: User;
}
