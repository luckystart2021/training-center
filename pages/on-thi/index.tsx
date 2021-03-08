import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import UserTemplate from "../../src/containers/UserTemplate";
import { LicenseType, TestList } from "../../src/models/Question";
import userRequestService from "../../src/services/userService/user.service";
import style from "./style.module.scss";

const namespace = "on thi";

const OnThi = (props) => {
  const title = "Thi sát hạch lý thuyết lái xe online";

  const router = useRouter();

  const [loaiBang, setLoaiBang] = useState<LicenseType[]>([]);

  const [boDe, setBoDe] = useState<TestList>(new TestList());

  const [boDeSelected, setBoDeSelected] = useState<number>(-1);

  let loaiBoDeSelected = -1;

  const getListLicensesType = () => {
    userRequestService.getLicenseType().then((license) => {
      setLoaiBang(license.data.map((item) => new LicenseType(item)));
    });
  };

  const getTestList = (e: React.ChangeEvent<HTMLSelectElement>) => {
    userRequestService.layDanhSachBoDe(e.target.value).then((res) => {
      setBoDe(new TestList(res.data));
    });

    loaiBoDeSelected = Number(e.target.value);
  };

  const handleStart = () => {
    router.push(`/on-thi/${boDeSelected}`);
  };

  useEffect(() => {
    getListLicensesType();
  }, []);

  return (
    <UserTemplate title={title} className={style.on__thi}>
      <section className="contact-area ptb-110">
        <div className="container text-center">
          <h1>{title}</h1>
        </div>
        <div className="mx-auto">
          <div className="d-flex justify-content-center align-items-center">
            <div className={`input-group ${style.chon__bo__de}`}>
              <select className="custom-select" onChange={getTestList}>
                <option selected disabled>
                  Chọn Loại Bằng
                </option>
                {loaiBang.map((item) => (
                  <>
                    <option key={item.id} value={item.id}>
                      {item.licenseName}
                    </option>
                  </>
                ))}
              </select>
            </div>

            <div className={`input-group ${style.chon__bo__de}`}>
              <select
                className="custom-select"
                id="SelectBoDe"
                onChange={(e: any) => setBoDeSelected(Number(e.target.value))}
              >
                <option selected disabled>
                  Chọn Bộ Đề
                </option>
                {boDe.suite?.map((item) => (
                  <>
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  </>
                ))}
              </select>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={handleStart}
              disabled={boDeSelected === -1}
            >
              Bắt Đầu
            </button>
          </div>
        </div>

        <div className="container">{props.children}</div>
      </section>
    </UserTemplate>
  );
};

export default OnThi;
