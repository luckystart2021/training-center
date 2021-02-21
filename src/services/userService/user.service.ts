import { News } from "../../models/News";
import { TReqLogin } from "../../interfaces/admin.interface/admin.http.interfaces";
import axiosService from "../httpService/axios.service";

class UserRequestService {
  constructor() {}

  getQuestions(id: number) {
    const uri = `api/user/question/${id}`;
    return axiosService.getMethod<any, any>(uri);
  } 
  //API News Page
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
  //End API News Page

  //API Home Page
  getCarousel() {
    const uri = `user/slide`;
    return axiosService.getMethod(uri);
  }
  //{{url}}/api/user/home/news
  getHomeNews() {
    const uri = `user/home/news`;
    return axiosService.getMethod(uri);
  }
  //{{url}}/api/user/about
  getHomeAbout() {
    const uri = `user/about`;
    return axiosService.getMethod(uri);
  }
  //{{url}}/api/user/home/notification/news
  getHomeNotification() {
    const uri = `user/home/notification/news`;
    return axiosService.getMethod(uri);
  }
  //End API Home Page
}

const userRequestService = new UserRequestService();
export default userRequestService;
