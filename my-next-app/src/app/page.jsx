// import Navbar from '@/components/Navbar/Navbar'
import AboutActivpaisa from "@/components/homepage/about-activpaisa/AboutActivpaisa";
import BorrowSmart from "@/components/homepage/borrow-smart-not-hard/BorrowSmart";
import WhyChooseActivpaisa from "@/components/homepage/why-choose-activpaisa/WhyChooseActivpaisa";
import React from "react";

function Home() {
  return <div className="w-[1440px] ">
    <BorrowSmart />
    <AboutActivpaisa/>
    <WhyChooseActivpaisa/>
  </div>;
}

export default Home;
