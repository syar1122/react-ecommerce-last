import React from "react";
import HeroSection from "../../components/home/heroSection/HeroSection";
import NewArrives from "../../components/home/newArivesProducts/NewArrives";
import TrendingSection from "../../components/home/trendingProducts/TrendingSection";
import { useGetProductsQuery } from "../../services/app.api";

export default function Home() {
  let { data, isLoading, error } = useGetProductsQuery();
  let trendP;
  let newP;
  if (data) {
    trendP = data.slice(0, 3);
    newP = data.slice(3, 6);
    console.log();
  }

  console.log(newP, trendP);

  return (
    <div>
      {isLoading && "isLoading..."}
      {data && (
        <>
          <HeroSection />
          <TrendingSection products={trendP} />
          <NewArrives products={newP} />
        </>
      )}
      {error && error.message}
    </div>
  );
}
