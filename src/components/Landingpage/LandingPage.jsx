import React from "react";
import Content from "./Content";
import Pricecard from "./Pricecard/Pricecard";
import Reviews from "./Reviews/Reviews";
import Footer from "./Footer"
import Tracker from "./Tracking/Tracker";
import Faq from "./Faq";

const LandingPage = () => {
  return (
    <>
      <Content />
      <Tracker/>
      <Reviews/>
      <Pricecard/>
      <Faq/>
      <Footer/>
    </>
  );
};

export default LandingPage;
