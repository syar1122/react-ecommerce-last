import React from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import NewArrives from "../../components/newArivesProducts/NewArrives";
import PreLoade from "../../components/preLoader/PreLoade";
import TrendingSection from "../../components/trendingProducts/TrendingSection";
import { useGetProductsQuery } from "../../services/app.api";

export default function Home() {
  let { data, isSuccess, isFetching, error } = useGetProductsQuery();

  let trendP = [1, 2, 3];
  let newP = [1, 2, 3];

  if (data) {
    let { products } = data;
    if (products) {
      console.log(products);
      trendP = products.slice(0, 3);
      console.log(trendP, "trending");
      newP = products.slice(3, 5);
      console.log();
    }
  }

  console.log(newP, trendP);

  return (
    <>
      {isFetching && <PreLoade />}
      {data && isSuccess && (
        <>
          <HeroSection />
          {trendP && <TrendingSection products={trendP} />}
          {newP && <NewArrives products={newP} />}
        </>
      )}
      {error && alert(error.message)}
    </>
  );
}
