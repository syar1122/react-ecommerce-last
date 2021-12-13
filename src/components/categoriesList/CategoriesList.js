import React from "react";
import { Link } from "react-router-dom";
import {
  useGetCategoriesQuery,
  useGetSubCategoriesQuery,
} from "../../services/app.api";
import PreLoade from "../preLoader/PreLoade";
import "./categoriesList.css";

export default function CategoriesList({ catId, catName }) {
  console.log(catId, "cat list");
  let { data = {}, isFetching, error } = useGetSubCategoriesQuery(catId);
  let { categories } = data;

  console.log(categories);
  return (
    <>
      {isFetching && <PreLoade />}
      <ul>
        {categories &&
          categories.map((category, index) => {
            return (
              <li>
                <Link to={`products/${catName}/${category.name}`}>
                  {category.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
