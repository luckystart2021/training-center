import { TReqLogin } from "../../interfaces/admin.interface/admin.http.interfaces";
import axiosService from "../httpService/axios.service";

class UserRequestService {
  constructor() {}

  getQuestions(id: number) {
    const uri = `api/user/question/${id}`;
    return axiosService.getMethod<any, any>(uri);
  }


}

const userRequestService = new UserRequestService();
export default userRequestService;
