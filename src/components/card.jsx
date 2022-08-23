import React from "react";

function Card(props) {
  return (
    <div className="card col-4" >
      <div className="card-body">
        <img src={"images/"+props.imgsrc} alt=""></img>
        <h3 className="card-title">Lorem Ipsum</h3>
        <h6 className="card-text">Morbi tristique senectus et netus. Venenatis lectus magna fringilla urna porttitor. Amet porttitor eget dolor morbi non arcu risus quis.</h6>
      </div>
    </div>
  );
}

export default Card;
