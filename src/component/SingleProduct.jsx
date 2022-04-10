import React from "react";
import style from "../style.module.css";
export default function SingleProduct({ datas: { category, title, image } }) {
  return (
    <div className={`${style.card} card my-2 text-center`}>
      <div className="text-center">
        <img src={image} className={`${style.img} card-img-top `} alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title">{category}</h5>
        <p className="card-text">{title.substr(0, 25)}</p>
      </div>
    </div>
  );
}
