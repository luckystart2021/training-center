import Axios, {
  AxiosStatic,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosInstance,
} from "axios";
import { useRouter } from "next/router";
import redirect from "nextjs-redirect";
import localStorageConstaint from "../../constaint/localStorage.constaint";
import { TResData } from "../../interfaces/admin.interface/index.interfaces";
import loggerService from "../logger/logger.service";

class AxiosService {
  private namespace: string = "axios_Service";
  private axios: AxiosInstance;
  private accessToken: string;
  private axiosConfig: AxiosRequestConfig;
  constructor() {
    this.axios = Axios.create({
      baseURL: this.getBaseUrl(),
    });
    this.getAccessToken();
    this.getAxiosConfig();
  }

  private getBaseUrl(): string {
    return "http://52.231.9.216/api/";
  }

  private getAccessToken = (): string => {
    if (typeof window !== "undefined") {
      this.accessToken = window.localStorage.getItem(
        localStorageConstaint.GETACCESSTOKEN
      );
    }
    return this.accessToken;
  };

  private getAxiosConfig = (): AxiosRequestConfig => {
    this.getAccessToken();
    if (!this.accessToken) {
      return;
    }
    this.axiosConfig = {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    };
  };

  getMethod<T = any, R = AxiosResponse<T>>(uri: string): Promise<TResData<R>> {
    return this.handleFlow(this.axios.get<T, R>(uri, this.axiosConfig));
  }

  postMethod<T = any, R = AxiosResponse<T>, D = any>(
    uri: string,
    data: D
  ): Promise<TResData<R>> {
    return this.handleFlow(this.axios.post<T, R>(uri, data, this.axiosConfig));
  }

  putMethod<T = any, R = AxiosResponse<T>, D = any>(
    uri: string,
    data: D
  ): Promise<TResData<R>> {
    return this.handleFlow(this.axios.put<T, R>(uri, data, this.axiosConfig));
  }

  patchMethod<T = any, R = AxiosResponse<T>, D = any>(
    uri: string,
    data: D
  ): Promise<TResData<R>> {
    return this.handleFlow(this.axios.patch<T, R>(uri, data, this.axiosConfig));
  }

  deleteMothod<T = any, R = AxiosResponse<T>>(
    uri: string
  ): Promise<TResData<R>> {
    return this.handleFlow(this.axios.delete<T, R>(uri, this.axiosConfig));
  }

  private handleFlow<T = any, R = AxiosResponse<T>, D = any>(
    method: Promise<R>
  ): Promise<TResData<R>> {
    return new Promise<TResData<R>>((resolve, reject) => {
      method
        .then((res: any) => {
          console.log(res);
          resolve({
            data: res.data,
            status: res.status,
            isSuccess: true,
          });
        })
        .catch((err) => {
          this.handleError(err);
          reject({
            message: err.response.data.message,
            statusCode: err.response.data.status,
            status: err.response.status,
          });
        });
    });
  }

  private handleError = (err: any) => {
    const status = err.response.status;
    loggerService.error(this.namespace, "", { ...err });
    switch (status) {
      case 400:
      case 401:
      case 403:
        redirect("/login");
        break;
      default:
        break;
    }
  };
}

const axiosService = new AxiosService();
export default axiosService;
