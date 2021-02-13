export type TReqLogin = {
  userName: string;
  password: string;
};

export type TResData<T> = {
  data: T;
  status: number;
  isSuccess: boolean;
};
