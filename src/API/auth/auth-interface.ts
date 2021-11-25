export interface IAuth {
  login: string;
  password: string;
}

export interface IUser {
  id: number;
  login: string;
  city: ICity;
}

export interface ICity {
  id: number;
  name: string;
}
