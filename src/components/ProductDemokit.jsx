import React from "react";
const ProductDemokit = () => {
  return (
    <div className="container-fluid product_demo_kit">
      <div className="container ">
        <div className="row product_demo_kit_row">
          <div
            className="col-lg-6 aos-init aos-animate row-left"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h2>
              Take your <span>first step</span> in VR training today with a
              minimal budget
            </h2>
            <div className="img-file">
              <img
                src="/assets/img/service/03_service.png"
                alt=""
                className={"img-fluid"}
              />
            </div>
            <p>1 Headset Kit+ 1 Training Module</p>
          </div>
          <div
            className="col-lg-6 aos-init aos-animate row-right"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h2>
              Take your <span>first step</span> in VR training today with a
              minimal budget
            </h2>
            <div className="img-file">
              <img
                src="/assets/img/service/03_service.png"
                alt=""
                className={"img-fluid"}
              />
            </div>
            <p>1 Headset Kit+ 1 Training Module</p>
          </div>
          <div className="btn">
            <button className="default-btn">Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDemokit;
