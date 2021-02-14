import { TReqLogin } from "../../interfaces/admin.interface/index.interfaces";
import axiosService from "../httpService/axios.service";

class UserRequestService {
  constructor() {}

  getQuestions(id: number) {
    const uri = `api/user/question/${id}`;
    return axiosService.getMethod<any, any>(uri);
  } 
  getNewsById(id: number) {
    const uri = `https://600fdd7a6c21e1001704f836.mockapi.io/news/${id}`;
    return axiosService.getMethod<any, any>(uri);
  }
}

const userRequestService = new UserRequestService();
export default userRequestService;
