import React from "react";
import services from "./MyServices";
import Card from "./Card";

function Services() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center" >Our Services</h1>
      </div>
      <div>
        <div className="container-fluid mb-5 ">
          <div className="row">
            <div className="col-10 mx-auto  ">
              <div className="row">
                <div className="col-md-10 col-10 mx-auto">
                  {/** */}
                 {
                     services.map((data)=>{
                         return (
                            <Card
                              card_img={data.card_img}
                              card_title={data.card_title}
                              card_text={data.card_text}
                            />
                         )
                     })
                 }
                 
                  {/** */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
