import AdminTemplate from "../../../src/containers/AdminTemplate";
import dynamic from "next/dynamic";

// Common editors usually work on client-side, so we use Next.js's dynamic import with mode ssr=false to load them on client-side
const Editor = dynamic(() => import("../../../src/components/ckeditor"), {
  ssr: false,
});

export default function Index() {
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
          <div className="col-lg-12">
            <form>
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example1"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form6Example1">
                      First name
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example2"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form6Example2">
                      Last name
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form6Example3"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form6Example3">
                  Company name
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form6Example4"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form6Example4">
                  Address
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form6Example5"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form6Example5">
                  Email
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="number"
                  id="form6Example6"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form6Example6">
                  Phone
                </label>
              </div>

              <div className="form-outline mb-4">
                {/* <textarea
                  className="form-control"
                  id="form6Example7"
                  rows={4}
                ></textarea> */}
                <Editor
                  onChange={
                      console.log("this.updateContent")
                  }
                />
                <label className="form-label" htmlFor="form6Example7">
                  Additional information
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Place order
              </button>
            </form>
          </div>
        </div>
      </div>
    </AdminTemplate>
  );
}
