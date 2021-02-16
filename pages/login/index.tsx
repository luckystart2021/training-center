// import "./styles.module.scss";
import { Router } from "next/router";
import React, { FormEvent, useState } from "react";
import { TReqLogin } from "../../src/interfaces/admin.interface/admin.http.interfaces";
import adminReqService from "../../src/services/adminService/admin.request.service";
import localStorageService from "../../src/services/localStorage.service/localStorage.service";
import { useRouter } from "next/router";

const LoginPage = ({ data, ...props }) => {
  const router = useRouter();

  const [dataLogin, setDataLogin] = useState<TReqLogin>({
    password: "",
    username: "",
  });

  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    const dataChanged = {
      ...dataLogin,
      [name]: value,
    };
    setDataLogin(dataChanged);
  };

  const handleOnsubmit = (e: any) => {
    e.preventDefault();
    adminReqService
      .loginMethod(dataLogin)
      .then((res) => {
        router.push("/admin");
        localStorageService.accessToken.set(res.data.token);
        localStorageService.userInfor.set(res.data.infoUser);
      })
      .catch((err) => {
        // console.log('error', err);
      });
  };

  return (
    <div className="loginPage">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="">
              <form className="box" onSubmit={handleOnsubmit}>
                <h1>Login</h1>
                <p className="text-muted">
                  Please enter your login and password!
                </p>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleOnchange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleOnchange}
                />
                {/* <a className="forgot text-muted" href="#">
                  Forgot password?
                </a> */}

                {/* <input type="submit" name="" defaultValue="Login" /> */}
                <button type="submit" className="btn__login">
                  Login
                </button>
                <div className="col-md-12">
                  <ul className="social-network social-circle">
                    <li>
                      <a
                        href="https://google.com"
                        target="_blank"
                        className="icoFacebook"
                        title="Facebook"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="icoTwitter"
                        target="_blank"
                        title="Twitter"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="icoGoogle"
                        target="_blank"
                        title="Google +"
                      >
                        <i className="fab fa-google-plus" />
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
