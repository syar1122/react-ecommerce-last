import React, { useState } from "react";
import { useGetMainCategoriesQuery } from "../../services/app.api";
import { Link } from "react-router-dom";

import CategoriesList from "../categoriesList/CategoriesList";
import "./categoriesHeader.css";

export default function CategoriesHeader() {
  let { data, isFetching, err } = useGetMainCategoriesQuery();
  let [drpActive, setDrpActive] = useState(0);
  let categories;
  if (data) {
    ({ categories } = data);
  }
  return (
    <div className="cat-header">
      {categories &&
        categories.map((cat, index) => {
          return (
            <Link
              className="dropdown-btn"
              to={`/products/${cat.name}`}
              onMouseEnter={() => setDrpActive(index + 1)}
              onMouseLeave={() => setDrpActive(0)}
            >
              <div className="drp-header">
                {cat.name}
                <i className="material-icons">arrow_drop_down</i>
                {drpActive !== 0 && drpActive === index + 1 && (
                  <CategoriesList catId={cat._id} catName={cat.name} />
                )}
              </div>
            </Link>
          );
        })}
    </div>
  );
}
