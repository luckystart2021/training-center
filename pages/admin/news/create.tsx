import AdminTemplate from "../../../src/containers/AdminTemplate";
import dynamic from "next/dynamic";
import adminReqService from "../../../src/services/adminService/admin.request.service";
import localStorageService from "../../../src/services/localStorage.service/localStorage.service";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AdminHeader from "../../../src/components/adminHeader";
import { toast, ToastContainer } from "react-nextjs-toast";

// Common editors usually work on client-side, so we use Next.js's dynamic import with mode ssr=false to load them on client-side
const Editor = dynamic(() => import("../../../src/components/ckeditor"), {
  ssr: false,
});

function ChangeToSlug(slug) {
  //Đổi chữ hoa thành chữ thường
  slug = slug.toLowerCase(); //Đổi ký tự có dấu thành không dấu
  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a");
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e");
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, "i");
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o");
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u");
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y");
  slug = slug.replace(/đ/gi, "d"); //Xóa các ký tự đặt biệt
  slug = slug.replace(
    /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
    ""
  ); //Đổi khoảng trắng thành ký tự gạch ngang
  slug = slug.replace(/ /gi, "-"); //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
  slug = slug.replace(/\-\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-/gi, "-");
  slug = slug.replace(/\-\-/gi, "-"); //Xóa các ký tự gạch ngang ở đầu và cuối
  slug = "@" + slug + "@";
  slug = slug.replace(/\@\-|\-\@|\@/gi, ""); //In slug ra textbox có id “slug”
  return slug;
}

async function reloadChil(id) {
  let listCate = null;
  listCate = await adminReqService.getListCategories(id);
  return listCate.data;
}

Index.getInitialProps = async (context) => {
  let listCate = null;
  listCate = await adminReqService.getListCategories(1);
  return {
    props: {
      listCate: listCate?.data,
    },
  };
};

export default function Index({ props }) {
  const router = useRouter();

  let dataCkeditor = "";
  const handleData = (dataTemplate) => {
    dataCkeditor = dataTemplate;
  };

  const postFormData = (event) => {
    event.preventDefault();
    console.log(dataCkeditor);
    var data = new FormData();
    data.append("id_child_category", event.target.id_child_category.value);
    data.append("title", event.target.title.value);
    data.append("description", event.target.description.value);
    data.append("details", dataCkeditor);
    data.append("meta", ChangeToSlug(event.target.title.value));
    data.append("key_word_seo", event.target.key_word_seo.value);
    data.append(
      "img",
      event.target.img.files[0],
      event.target.img.files[0]?.name
    );
    adminReqService
      .createNewsMethod(data)
      .then((res) => {
        console.log("dong ne", res.data);
        if (res.data.status) {
          toast.notify(``, {
            title: `Thành công`,
            duration: 3,
            type: "success",
          });
          setTimeout(() => {
            router.push("/admin/news");
          }, 3000);
        }
      })
      .catch((err) => {
        toast.notify(`${err.message}`, {
          title: `Thất bại`,
          duration: 3,
          type: "error",
        });
        console.log("error", err);
      });
  };

  const [chil, setChil] = useState(props.listCate);
  const onChangeChil = (event) => {
    console.log("mã danh mục: ", event.target.value);
    let data = reloadChil(event.target.value)
      .then((result) => {
        setChil(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <AdminTemplate title="Tin tức">
      <div className="container-fluid">
        {AdminHeader("Đăng bài")}
        <div className="row">
          <div className="col-lg-8">
            <form onSubmit={postFormData}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="idcate">Danh mục</label>
                  <select
                    id="idcate"
                    name="idcate"
                    onChange={onChangeChil}
                    className="form-control"
                  >
                    <option selected value="1">
                      Thông báo
                    </option>
                    <option value="2">Tin tức</option>
                    <option value="3">Giới thiệu</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="id_child_category">Danh mục con</label>
                  <select
                    id="id_child_category"
                    name="id_child_category"
                    className="form-control"
                    defaultValue={0}
                  >
                    {chil.map((item, index) => {
                      return (
                        <option
                          selected={index == 0 ? true : false}
                          value={item.id}
                          key={index}
                        >
                          {item.title}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="title">
                  Tiêu đề
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="description">
                  Mô tả
                </label>
                <textarea
                  name="description"
                  id="description"
                  cols={30}
                  rows={10}
                  className="form-control"
                ></textarea>
              </div>
              {/* <div className="form-outline mb-4">
                <label className="form-label" htmlFor="meta">
                  Meta url
                </label>
                <input
                  type="text"
                  id="meta"
                  name="meta"
                  className="form-control"
                />
              </div> */}

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="key_word_seo">
                  Key work SEO
                </label>
                <input
                  type="text"
                  id="key_word_seo"
                  name="key_word_seo"
                  className="form-control"
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="img">
                  Chọn hình ảnh từ máy tính
                </label>
                <div className="input-group">
                  <input
                    type="file"
                    className="img"
                    id="img"
                    accept="image/*"
                  />
                </div>
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form6Example7">
                  Additional information
                </label>
                <Editor onchangeData={handleData} />
              </div>
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Đăng bài
              </button>
            </form>
          </div>
        </div>
        <ToastContainer align={"right"} />
      </div>
    </AdminTemplate>
  );
}
