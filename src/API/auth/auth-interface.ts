export interface IAuth {
  name: string;
  password: string;
}

export interface IUser {
  id: number;
  name: string;
  city: ICity;
}

export interface ICity {
  id: number;
  name: string;
}
