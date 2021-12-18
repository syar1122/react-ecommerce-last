import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetSubCategoriesQuery } from "../../services/app.api";
import PreLoade from "../preLoader/PreLoade";
import "./categoriesList.css";

export default function CategoriesList({ catId, catName }) {
  console.log(catId, "cat list");
  let { data = {}, isLoading, error } = useGetSubCategoriesQuery(catId);
  let { categories } = data;
  useEffect(() => {}, [error]);

  console.log(categories);
  return (
    <>
      <ul>
        {isLoading && (
          <li style={{ display: "flex", justifyContent: "center" }}>
            <PreLoade />
          </li>
        )}
        {categories &&
          categories.map((category, index) => {
            return (
              <li key={index}>
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
