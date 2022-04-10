import React from "react";
import style from "../style.module.css";
import SelectOption from "./SelectOption";
export default function DropDown({ categories, selectCategoryHandle }) {
  return (
    <select
      className={`${style.dropdown} form-select`}
      aria-label="Default select example"
      onChange={(e) => selectCategoryHandle(e.target.value)}
    >
      <option defaultValue="all">all</option>
      {categories.map((x) => {
        return (
          <SelectOption
            key={x.id}
            value={x.category}
            selectCategoryHandle={selectCategoryHandle}
          />
        );
      })}
    </select>
  );
}
