import React from "react";

export default function PrevNextButton({
  controller,
  Handler,
  type,
  isDisabled,
}) {
  return (
    <li className={isDisabled ? "page-item  disabled" : "page-item"}>
      <a className="page-link" href="  " onClick={(e) => Handler(e, type)}>
        {controller}
      </a>
    </li>
  );
}
