import React from "react";
import austronant from './images/astronaut1.svg'
import {NavLink} from 'react-router-dom'
function SimpleForm( props) {
  return (
    <section id="header" className="">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto ">
              <div className="row">
            <div className="col-md-6 col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>
                {props.name}{" "}
                <strong className="brand-name">{props.brandName}</strong>
              </h1>
              <h2 className="my-3">
              {props.info}
              </h2>
              <div className="mt-3">
                <NavLink to={props.visit} className="btn-get-started">
                  {props.btn}
                </NavLink>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-6 order-1 order-lg-2 header-image ">
              <img src={props.img} className="img-fluid animated" alt="Hello"  width="400px"/>
              
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SimpleForm;
