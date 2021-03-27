import {
  ILoginResponse,
  TReqLogin,
} from "../../interfaces/admin.interface/admin.http.interfaces";
import axiosService from "../httpService/axios.service";

class AdminRequestService {
  constructor() {}

  loginMethod(data: TReqLogin) {
    const uri = "admin/system/login";
    return axiosService.postMethod<TReqLogin, ILoginResponse>(
      uri,
      data
    );
  }

  //News Page
  getListCategories(id) {
    //https://api.hellobugs.dev/api/admin/child_category/1/views
    const uri = `admin/child_category/${id}/views`;
    return axiosService.getMethod<any>(uri);
  }

  //{{url}}/api/admin/article/7/update
  updateNewsById(id, data) {
    const uri = `admin/article/${id}/update`;
    return axiosService.putMethod(uri, data);
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
  //{{url}}/api/admin/article/1/detail
  showNewsByID(id) {
    const uri = `admin/article/${id}/detail`;
    return axiosService.getMethod(uri);
  }

  //INFORMATION API admin
  showInformation() {
    const uri = "admin/information/view";
    return axiosService.getMethod(uri);
  }
  //{{url}}/api/admin/information/1/update
  updateInformation(id, data) {
    const uri = `admin/information/${id}/update`;
    return axiosService.putMethod(uri, data);
  }

  //Contact API
  showAllContact() {
    const uri = "admin/contact/view";
    return axiosService.getMethod(uri);
  }

  //Slider API
  //api/admin/slide/view
  showAllSlider() {
    const uri = "admin/slide/view";
    return axiosService.getMethod(uri);
  }
  //Show Detail slider
  //{{url}}/api/admin/slide/2/view-detail
  showDetailSlider(id) {
    const uri = `admin/slide/${id}/view-detail`;
    return axiosService.getMethod(uri);
  }
  //Update slider
  //{{url}}/api/admin/slide/3/update
  updateSliderById(id, data) {
    console.log(data);
    const uri = `admin/slide/${id}/update`;
    return axiosService.putMethod(uri, data);
  }
  //Hide slider
  //{{url}}/api/admin/slide/1/hide
  updateHideSlider(id, data) {
    const uri = `admin/slide/${id}/hide`;
    return axiosService.putMethod(uri, data);
  }
  //{{url}}/api/admin/slide/1/un-hide
  updateUnHideSlider(id, data) {
    const uri = `admin/slide/${id}/un-hide`;
    return axiosService.putMethod(uri, data);
  }
  //Delete Slider
  //{{url}}/api/admin/slide/3/delete
  deleteSlider(id) {
    const uri = `admin/slide/${id}/delete`;
    return axiosService.deleteMothod(uri);
  }
  //Create Slider
  //{{url}}/api/admin/slide/create
  createSlider(data) {
    const uri = `admin/slide/create`;
    return axiosService.postMethod(uri, data);
  }

  //Categories API
  //admin/child_category/1/views
  showListCateById(id) {
    const uri = `admin/child_category/${id}/views`;
    return axiosService.getMethod(uri);
  }
  //{{url}}/api/admin/child_category/8/update
  updateChildCategories(id, data) {
    const uri = `admin/child_category/${id}/update`;
    return axiosService.putMethod(uri, data);
  }
  //{{url}}/api/admin/child_category/create
  createChildCategories(data) {
    const uri = `admin/child_category/create`;
    return axiosService.postMethod(uri, data);
  }

  //SEO API
  //Get SEO DETAILS
  //{{url}}/api/admin/seo/views
  showKeywordSEO() {
    const uri = `admin/seo/views`;
    return axiosService.getMethod(uri);
  }
  //{{url}}/api/admin/seo/1/update
  updateKeywordSEO(data) {
    const uri = `admin/seo/1/update`;
    return axiosService.putMethod(uri, data);
  }

  //Album API
  showListAlbum() {
    const uri = `admin/album/views`;
    return axiosService.getMethod(uri);
  }

  showAlbumDetail(id) {
    const uri = `admin/album/${id}/view-detail`;
    return axiosService.getMethod(uri);
  }
}

const adminReqService = new AdminRequestService();
export default adminReqService;
