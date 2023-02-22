export interface User {
  username: string,
  email: string,
  fullName: string,
  address: {
    city: string,
    zipCode: number,
    street: string,
    state: string,
  }
}

export interface RegisterUser extends User {
  password: string,
  confirmPassword: string
}

export interface Session {
  data: {[key: string]: any};
  token: string;
}
