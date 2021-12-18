import React, { useState } from "react";
import "./products.css";

import { useNavigate, useParams } from "react-router";
import { useGetProductsWithQueryQuery } from "../../services/app.api";

import { useSelector } from "react-redux";
import PreLoade from "../../components/preLoader/PreLoade";
import ProductCard from "../../components/productCard/ProductCard";

export default function Products() {
  let { catName, subCat } = useParams();
  console.log(subCat);
  let queryStr = `mainCat=${catName}&subCat=${subCat}`;
  console.log(queryStr);

  let {
    data = [],
    isLoading,
    isSuccess,
  } = useGetProductsWithQueryQuery(queryStr);
  console.log(data.products, subCat, catName);
  let { cartItems } = useSelector((state) => state.cart);
  let { products } = data;
  const cartProductId = [];
  cartItems.forEach((cartItem) => {
    cartProductId.push(cartItem._id);
  });

  console.log(subCat);

  // console.log(products);

  // if (products && catName !== "All") {
  //   filteredProduct = products.filter((el) => {
  //     console.log(el);
  //     return el.categories.name === catName;
  //   });
  //   console.log(filteredProduct);
  // }

  return (
    <>
      <div className="container products">
        {isLoading && (
          <div className="preload-wrapper">
            <PreLoade />
          </div>
        )}
        {isSuccess && data && (
          <div className="products-page">
            <div className="title">
              {!subCat && <h2>{catName}</h2>}
              {subCat && <h2>{subCat}</h2>}
            </div>

            <div className="product-list">
              {products &&
                data.products.map((product, index) => {
                  return (
                    <ProductCard product={product} key={index}></ProductCard>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
