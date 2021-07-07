import React from "react";

function Contact() {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
      </div>
      <div className="container container_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Full Name"
              />
            </div>
            <div class="mb-3">
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Phone No"
                maxLength="10"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div>
              <h1 className="col-12">
              <a class="btn-submit col-12 p-2" style={{alignContent:"center",display:"flex",justifyContent:"center"}} data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                  Send
                  </a>

                
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalToggleLabel">Thanks for connecting with us...</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        We will reach you as soon as possible
      </div>
      <div className="modal-footer">
        <button className="btn-submit col-4 p-2" data-bs-dismiss="modal">Ok</button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Contact;
