import { News } from "../../models/News";
import { TReqLogin } from "../../interfaces/admin.interface/admin.http.interfaces";
import axiosService from "../httpService/axios.service";

class UserRequestService {
  constructor() {}

  getQuestions(id: number) {
    const uri = `api/user/question/${id}`;
    return axiosService.getMethod<any, any>(uri);
  } 
  getNewsById(id: string, meta:string) {
    const uri = `user/${meta}/${id}/news`;
    return axiosService.getMethod(uri);
  }
  getListNews(idCate: number, pageNumber: number) {
    const uri = `user/${idCate}/news?page=${pageNumber}`;
    return axiosService.getMethod<News>(uri);
  }
  getListSubCategoriesById(id: number) {
    const uri = `user/list/category/${id}`;
    return axiosService.getMethod(uri);
  }
  getListPagination(cateId: number) {
    const uri = `user/${cateId}/news/pagination`
    return axiosService.getMethod(uri)
  }
  ///api/user/tin-tuc/hoat-dong/list/child-news/pagination
  getListChilPagination(meta: string) {
    const uri = `user/${meta}`
    return axiosService.getMethod(uri)
  }
  getListChildNews(meta: string) {
    const uri = `user/${meta}`;
    return axiosService.getMethod(uri);
  }
  getListNewsPupolar() {
    const uri = `user/popular/news`;
    return axiosService.getMethod(uri);
  }
  search(query: string) {
    const uri = `user/news/search?key=${query}`;
    return axiosService.getMethod(uri);
  }
}

const userRequestService = new UserRequestService();
export default userRequestService;
