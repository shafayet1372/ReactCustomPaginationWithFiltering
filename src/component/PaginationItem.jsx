import React from "react";
import style from "../style.module.css";
export default function PaginationItem({
  pageNumber,
  currentPage,
  currentPageHandler,
  isNotActive,
}) {
  return (
    <li
      className={currentPage == pageNumber ? `page-item active` : ` page-item`}
    >
      <a
        className={
          isNotActive ? `${style.notActivePage} page-link` : ` page-link`
        }
        href=""
        onClick={(e) => currentPageHandler(e, pageNumber)}
      >
        {pageNumber}
      </a>
    </li>
  );
}
