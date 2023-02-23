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

export interface IProduct {
  name: string;
  category: number;
  qty: number,
  price: number,
  image?: string;

  [key: string]: any; // Recommend to use key for id;
}



