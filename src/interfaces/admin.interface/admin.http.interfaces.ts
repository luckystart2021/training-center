import { LoginDataModel } from "../../models/AdminDataResult";

export type TReqLogin = {
  username: string;
  password: string;
};

export type TResData<T> = {
  data: T;
  status: number;
  isSuccess: boolean;
};

export interface ILoginResponse {
  infoUser: any;
  token: string;
  success: boolean;
}

// export type T
