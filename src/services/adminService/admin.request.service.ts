import { TReqLogin } from "../../interfaces/admin.interface/index.interfaces";
import axiosService from "../httpService/axios.service";

class AdminRequestService {
  constructor() {}

  loginMethod(data: TReqLogin) {
    const uri = "/api/login";
    return axiosService.postMethod<any, any, TReqLogin>(uri, data);
  }
}

const adminReqService = new AdminRequestService();
export default adminReqService;
