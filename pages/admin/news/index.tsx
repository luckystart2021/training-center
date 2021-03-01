import AdminTemplate from "../../../src/containers/AdminTemplate";
import dynamic from "next/dynamic";
import adminReqService from "../../../src/services/adminService/admin.request.service";
import localStorageService from "../../../src/services/localStorage.service/localStorage.service";
import { useEffect, useState } from "react";

// Common editors usually work on client-side, so we use Next.js's dynamic import with mode ssr=false to load them on client-side
const Editor = dynamic(() => import("../../../src/components/ckeditor"), {
  ssr: false,
});

function postData(data) {}

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
    data.append("meta", event.target.meta.value);
    data.append("key_word_seo",event.target.key_word_seo.value);
    data.append("img", event.target.img.files[0], event.target.img.files[0]?.name);

    adminReqService
      .createNewsMethod(data)
      .then((res) => {
        console.log("dong ne", res.data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  const [chil, setChil] = useState(props.listCate);
  const onChangeChil = (event) => {
    let data = reloadChil(event.target.value)
      .then((result) => {
        setChil(result);
      })
      .catch((err) => {});
  };

  return (
    <AdminTemplate title="Tin tức">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a
            href="#"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-download fa-sm text-white-50"></i> Generate
            Report
          </a>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <form onSubmit={postFormData}>
              <div className="form-row">
                <div className="form-group col-md-4">
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
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="id_child_category">Danh mục con</label>
                  <select
                    id="id_child_category"
                    name="id_child_category"
                    className="form-control"
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
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="meta">
                  Meta url
                </label>
                <input
                  type="text"
                  id="meta"
                  name="meta"
                  className="form-control"
                />
              </div>

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
      </div>
    </AdminTemplate>
  );
}
