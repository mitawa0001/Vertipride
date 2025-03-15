import React from "react";



// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <>
    <div className="d-flex justify-content-between">
      <div>
        <h5>{props.block.headline}</h5>
        <h6>{props.block.headline}</h6>
      </div>
      <div className="d-flex ">
        <button className="btn btn-primary">{props.block.button}</button>
      </div>
    </div>
    <div className=" hiring-list">
      {props.block.long_desc}
      <h4 className="mt-5 text-center w-100">Responsibilities</h4>
      {props.block.responn}
      <h4 className="mt-5">Minimum Qualifications</h4>
      <p>{props.block.qualification}</p>
      <div className="w-100 text-center">

      </div>



    </div>



  </>
);
