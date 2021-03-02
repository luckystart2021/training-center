import Axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from "axios";
import redirect from "nextjs-redirect";

import { TResData } from "../../interfaces/admin.interface/admin.http.interfaces";
import { axiosContentType } from "../../interfaces/axios.service.interface/axios.service.interface";
import _authService from "../authService/auth.service";
import loggerService from "../logger/logger.service";

class AxiosService {
  private namespace: string = "axios_Service";
  private axios: AxiosInstance;
  private axiosConfig: AxiosRequestConfig;
  private authService = _authService;
  private logger = loggerService;
  constructor() {
    this.axios = Axios.create({
      baseURL: this.getBaseUrl(),
    });
    this.getAxiosConfig();
  }

  private getBaseUrl(): string {
    return "http://34.87.164.178/api/";
  }

  getAxiosConfig = (): void => {
    this.axiosConfig = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBY2Nlc3NfdXVpZCI6ImUyMzcwZjhjLTA2YjQtNGE3NC1hYjRlLTA3NzZkYzZiODZkMyIsIkV4cGlyZXNBdCI6MTYxNDc4MzYwMSwiUm9sZSI6IkFETUlOIiwiVXNlcklEIjoicGhvbmcifQ.Z2uxDY-SLsrkSu5jEux3Kh_yEIOOU01NqX8udDCd67k`,
        ["Content-Type"]: "application/json",
      },
    };
  };

  setContentType(contentType: axiosContentType = "application/json") {
    this.axiosConfig.headers = {
      ...this.axiosConfig.headers,
      ["Content-Type"]: contentType,
    };
  }

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
          resolve({
            data: res.data,
            status: res.status,
            isSuccess: true,
          });
        })
        .catch((err: any) => {
          // loggerService.error(this.namespace, "", { ...err });

          this.handleError(err);
          reject({
            message: err.response.data.error,
            statusCode: err.response.data.status,
            status: err.response.status,
          });
        });
    });
  }

  private handleError = (err: any) => {
    const status = err.response?.status;
    this.logger.error(this.namespace, "", { ...err.response });
    switch (status) {
      // case 400:
      case 401:
      case 403:
        redirect("/");
        break;
      default:
        break;
    }
  };
}

const axiosService = new AxiosService();
export default axiosService;
