import React from "react";
import { NavLink } from "react-router-dom";
import "./project.css";
import discovery from "./images/discovery.png";

function Card(data) {
  return (
    <div className="card mb-4">
    <div className="row">
      <div className="col-4">
        <img
          className="card-img-top"
          src={data.card_img}
          alt="..."
        />
      </div>
      <div className="col-8">
        <div class="card-body">
          <h5 class="card-title">{data.card_title}</h5>
          <p class="card-text">
            {data.card_text}
          </p>
          <a href="#" class="btn-get-started2">
            More Info..
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Card;
