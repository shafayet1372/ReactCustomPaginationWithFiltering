import React from "react";
import SingleProduct from "./SingleProduct";
import style from "../style.module.css";
export default function ProductView({ datas }) {
  return (
    <div className={`${style.mainContainer} row `}>
      {datas.map((x) => {
        return (
          <div className="col-md-3 col-sm-6" key={x.id}>
            <SingleProduct datas={x} />
          </div>
        );
      })}
    </div>
  );
}
