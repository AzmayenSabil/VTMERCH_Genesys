import React from "react";
import Header from "../components/header/Header";
import HeroSection from "../components/heroSection/HeroSection";
import Promotion from "../components/promotion/Promotion";
import SignedBookCollection from "../components/signedBookCollection/SignedBookCollection";
import Mission from "../components/mission/Mission";
import Footer from "../components/footer/Footer";

const Homepage = () => {
  return (
    <>
      <Header />
      {/* <HeroSection /> */}
      <Promotion />
      <SignedBookCollection />
      <Mission />
      <Footer />
    </>
  );
};

export default Homepage;
