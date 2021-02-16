import { ILoginResponse, TReqLogin } from "../../interfaces/admin.interface/admin.http.interfaces";
import axiosService from "../httpService/axios.service";

class AdminRequestService {
  constructor() {}

  loginMethod(data: TReqLogin) {
    const uri = "admin/system/login";
    return axiosService.postMethod<TReqLogin, ILoginResponse, TReqLogin>(uri, data);
  }
}

const adminReqService = new AdminRequestService();
export default adminReqService;
