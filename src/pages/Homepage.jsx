import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PromotionSection from "../components/PromotionSection";
import SignedCollection from "../components/SignedCollection";
import MissionSection from "../components/MissionSection";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <PromotionSection />
      <SignedCollection />
      <MissionSection />
      <Footer />
    </>
  );
};

export default Homepage;
