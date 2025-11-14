import Herosection from "@/components/homepage/Herosection";
import AboutActivpaisa from "@/components/homepage/about-activpaisa/AboutActivpaisa";
import BorrowSmart from "@/components/homepage/borrow-smart-not-hard/BorrowSmart";
import WhyChooseActivpaisa from "@/components/homepage/why-choose-activpaisa/WhyChooseActivpaisa";
import MainOurProduct from "@/components/homepage/Our-Product/MainOurProduct";
import React from "react";

function Home() {
  return (
    <div>
      <Herosection />
      <BorrowSmart />
      <AboutActivpaisa />
      <WhyChooseActivpaisa />
      <MainOurProduct />
    </div>
  );
}

export default Home;
