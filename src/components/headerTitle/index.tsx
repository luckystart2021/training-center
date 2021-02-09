import { Fragment } from "react";

const HeaderTitle = (headerData) => {
  return (
    <Fragment>
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>{headerData.title}</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>{headerData.title}</li>
            </ul>
          </div>
        </div>
        <div className="dot-shape1">
          <img src="assets/img/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="assets/img/shape/dot2.png" alt="image" />
        </div>
        <div className="dot-shape3">
          <img src="assets/img/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape4">
          <img src="assets/img/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape5">
          <img src="assets/img/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape6">
          <img src="assets/img/shape/dot6.png" alt="image" />
        </div>
        <div className="dot-shape7">
          <img src="assets/img/shape/dot1.png" alt="image" />
        </div>
        <div className="shape16">
          <img src="assets/img/shape/13.svg" alt="image" />
        </div>
        <div className="shape17">
          <img src="assets/img/shape/14.svg" alt="image" />
        </div>
        <div className="shape18">
          <img src="assets/img/shape/15.png" alt="image" />
        </div>
        <div className="shape19">
          <img src="assets/img/shape/16.png" alt="image" />
        </div>
        <div className="shape20">
          <img src="assets/img/shape/14.svg" alt="image" />
        </div>
      </div>
    </Fragment>
  );
}

export default HeaderTitle;