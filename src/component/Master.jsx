import React, { useState, useEffect } from "react";
import style from "../style.module.css";
import DropDown from "./DropDown";
import ProductView from "./ProductView";
import Spinner from "./Spinner";
import { v4 as uuidv4 } from "uuid";
import Pagination from "./Pagination";

export default function Master() {
  let [datas, setDatas] = useState([]);
  let [category, setCategory] = useState("all");
  let [categories, setCategories] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [perPage, setPerPage] = useState(8);
  useEffect(() => {
    let show = async () => {
      try {
        let data = await (
          await fetch("https://fakestoreapi.com/products")
        ).json();

        setDatas(data);
        setCategories(filterCategory(data));
      } catch (e) {}
    };
    show();
  }, []);

  let currentPageHandler = (e, currentPage) => {
    e.preventDefault();
    setCurrentPage(currentPage);
  };
  let filterCategory = (data) => {
    let categories = [...new Set(data.map((x) => x.category))].map((x) => ({
      category: x,
      id: uuidv4(),
    }));
    return categories;
  };

  let selectCategoryHandle = (value) => {
    setCategory(value);
    setCurrentPage(1);
    if (value == "all") {
      setPerPage(8);
    } else {
      setPerPage(4);
    }
  };

  let filteredByCategory = (data) => {
    if (category == "all") {
      return data;
    }
    return data.filter((x) => x.category == category);
  };

  let nextprevController = (type) => {
    if (type == "prev") {
      setCurrentPage((p) => p - 1);
    } else if (type == "next") {
      setCurrentPage((p) => p + 1);
    }
  };
  let allDataShow = () => {
    let totalData = filteredByCategory(datas.slice());
    let totalPage = Math.ceil(totalData.length / perPage);
    let productData = totalData.slice(
      currentPage * perPage - perPage,
      currentPage * perPage
    );
    return (
      <div>
        <ProductView datas={productData} />;
        <p>
          {currentPage} of {totalPage} pages...
        </p>
        {totalPage && totalPage != 1 && (
          <Pagination
            totalPage={totalPage}
            currentPage={currentPage}
            currentPageHandler={currentPageHandler}
            nextprevController={nextprevController}
          />
        )}
      </div>
    );
  };
  return (
    <div className={`${style.mainContent} container`}>
      {!datas.length ? (
        <Spinner />
      ) : (
        <div>
          <div className="row">
            <div className="col-md-6">
              <div>
                <p className={style.title}>Filter By Category</p>
                <DropDown
                  categories={categories}
                  selectCategoryHandle={selectCategoryHandle}
                />
              </div>
            </div>
          </div>
          {allDataShow()}
        </div>
      )}
    </div>
  );
}
