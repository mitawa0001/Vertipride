import React from "react";

// import Ban from "./Bar"
// import Home from "../pages/home";

import { Link } from "react-router-dom";


const handleClick = () => {
  window.open("Home", '_blank');
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (

  <>
    <div className="d-flex justify-content-between hiring-list">
      <div className="my-0">
        <h5>{props.block.headline}</h5>
        <p>{props.block.desc}</p>
      </div>

      <div className="d-flex">
        <Link class="current" to="/foo">
          <button className="btn btn-primary text-center">
            {props.block.button}
          </button>
        </Link>
       
      </div>
    </div>
  </>
);
