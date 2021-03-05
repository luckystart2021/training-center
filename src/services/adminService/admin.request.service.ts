import {
  ILoginResponse,
  TReqLogin,
} from "../../interfaces/admin.interface/admin.http.interfaces";
import axiosService from "../httpService/axios.service";

class AdminRequestService {
  constructor() {}

  loginMethod(data: TReqLogin) {
    const uri = "admin/system/login";
    return axiosService.postMethod<TReqLogin, ILoginResponse, TReqLogin>(
      uri,
      data
    );
  }

  //News Page
  getListCategories(id) {
    //https://api.dtc-project.tk/api/admin/child_category/1/views
    const uri = `admin/child_category/${id}/views`;
    console.log("axiosService.getAxiosConfig()");

    return axiosService.getMethod<any>(uri);
  }
  //{{url}}/api/admin/article/views-un-approval
  getListNewsUnApprove() {
    const uri = `admin/article/views-un-approval`;
    return axiosService.getMethod<any>(uri);
  }

  //post approve news
  // {{url}}/api/admin/article/5/approval
  postApproveNews(id) {
    const uri = `admin/article/${id}/approval`;
    return axiosService.putMethod(uri, null);
  }

  //{{url}}/api/admin/article/2/delete
  postRemoveNews(id) {
    const uri = `admin/article/${id}/delete`;
    return axiosService.putMethod(uri, null);
  }

  //{{url}}/api/admin/article/2/delete
  postRestoreNews(id) {
    const uri = `admin/article/${id}/un-delete`;
    return axiosService.putMethod(uri, null);
  }

  createNewsMethod(data) {
    const uri = "admin/article/create";
    return axiosService.postMethod(uri, data);
  }

  //{{url}}/api/admin/article/views-all
  showAllNews() {
    const uri = "admin/article/views-all";
    return axiosService.getMethod(uri);
  }

  //{{url}}/api/admin/article/views-deleted
  showAllDeleted() {
    const uri = "admin/article/views-deleted";
    return axiosService.getMethod(uri);
  }

  //information api admin
  showInformation() {
    const uri = "admin/information/view";
    return axiosService.getMethod(uri);
  }
  //{{url}}/api/admin/information/1/update
  updateInformation(id, data) {
    const uri = `admin/information/${id}/update`;
    return axiosService.putMethod(uri, data);
  }
}

const adminReqService = new AdminRequestService();
export default adminReqService;
