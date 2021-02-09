export class RouteModel {
  path: string;
  title: string;
  constructor(_path: string, _title: string) {
    this.path = _path;
    this.title = _title;
  }
}
const DTC_USER_ROUTE = [
  new RouteModel("/", "Trang Chủ"),
  new RouteModel("/gioi-thieu", "Giới Thiệu"),
  new RouteModel("/thong-tin", "Thông Tin"),
  new RouteModel("/dao-tao", "Dào Tạo"),
  new RouteModel("/tin-tuc", "Tin Tức"),
  new RouteModel("/on-thi", "Ôn Thi"),
  new RouteModel("/luu-y", "Lưu Ý"),
  new RouteModel("/lien-he", "Liên Hệ"),
];

export { DTC_USER_ROUTE };
