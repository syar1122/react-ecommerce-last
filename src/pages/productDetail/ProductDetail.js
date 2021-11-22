import React, { useState } from "react";
import { useParams } from "react-router";
import Magnifire from "../../components/magnifire/Magnifire";
import { useGetProductByIdQuery } from "../../services/app.api";
import "./productDetail.css";

export default function ProductDetail() {
  let { id } = useParams();
  let { data, isLoading, error } = useGetProductByIdQuery(id);

  console.log(data);

  return (
    <div className="product-detail container">
      <div className="img-wrapper">
        {data && <Magnifire image={data.image} />}
      </div>
      <div className="detail-wrapper">
        {data && (
          <>
            <h5>{data.name}</h5>
            <span className="helper-text">{data.category}</span>
            <p>{`$  ${data.price}`}</p>

            <p>{data.description}</p>
          </>
        )}
      </div>
    </div>
  );
}
