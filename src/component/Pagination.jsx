import React from "react";
import style from "../style.module.css";
import { v4 as uuidv4 } from "uuid";
import PaginationItem from ".//PaginationItem";
import PrevNextButton from "./PrevNextButton";
const pageRange = 7;
const prevPage = 3;
const nextPage = 4;
export default function Pagination({
  totalPage,
  currentPage,
  currentPageHandler,
  nextprevController,
}) {
  let nextPrevHandler = (e, type) => {
    e.preventDefault();
    nextprevController(type);
  };

  return (
    <nav aria-label="Page navigation example  ">
      <ul className={`${style.centerPage} pagination`}>
        <PrevNextButton
          isDisabled={currentPage == 1}
          controller={"Prev"}
          type="prev"
          Handler={nextPrevHandler}
        />
        {Array(totalPage)
          .fill(0)
          .map((x, i, arr) => {
            let values = (
              <PaginationItem
                key={uuidv4()}
                pageNumber={i + 1}
                currentPage={currentPage}
                currentPageHandler={currentPageHandler}
                isNotActive={
                  (i + 1 == 1 || i + 1 == arr.length) && currentPage != i + 1
                }
              />
            );

            if (
              currentPage >= pageRange &&
              i + 1 >= currentPage - prevPage &&
              i + 1 <= currentPage + nextPage
            ) {
              return values;
            } else if (i + 1 > 1 && i < pageRange && currentPage < pageRange) {
              return values;
            } else if (i + 1 == 1) {
              return values;
            } else if (i + 1 == arr.length) {
              return values;
            }
            return null;
          })}
        <PrevNextButton
          controller={"Next"}
          type="next"
          Handler={nextPrevHandler}
          isDisabled={currentPage == totalPage}
        />
      </ul>
    </nav>
  );
}
