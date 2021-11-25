import React from "react";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../../services/app.api";
import PreLoade from "../preLoader/PreLoade";
import "./categoriesList.css";

export default function CategoriesList() {
  let { data, isFetching, error } = useGetCategoriesQuery();
  console.log(error);
  return (
    <>
      {isFetching && <PreLoade />}
      <ul>
        {data &&
          data.map((category, index) => {
            return (
              <li>
                <Link to={`products/${category.name}`}>{category.name}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
