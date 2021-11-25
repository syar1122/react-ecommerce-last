import React from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import NewArrives from "../../components/newArivesProducts/NewArrives";
import PreLoade from "../../components/preLoader/PreLoade";
import TrendingSection from "../../components/trendingProducts/TrendingSection";
import { useGetProductsQuery } from "../../services/app.api";

export default function Home() {
  let { data, isSuccess, isFetching, error } = useGetProductsQuery();
  let trendP;
  let newP;
  if (data) {
    trendP = data.slice(0, 3);
    newP = data.slice(3, 6);
    console.log();
  }

  console.log(newP, trendP);

  return (
    <>
      {isFetching && <PreLoade />}
      {data && isSuccess && (
        <>
          <HeroSection />
          <TrendingSection products={trendP} />
          <NewArrives products={newP} />
        </>
      )}
      {error && alert(error.message)}
    </>
  );
}
