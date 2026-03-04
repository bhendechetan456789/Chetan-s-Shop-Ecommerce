import React from "react";
import Adv from "../components/Adv";
import Brand from "../components/Brand";
import NewArrivals from "../components/NewArrivals";
import SaleBanner from "../components/SaleBanner";
import Promo from "../components/Promo";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Adv />
      <Brand />
      <NewArrivals />
      <SaleBanner />
      <Promo />
      <Footer/>
    </div>
  );
}

export default Home;
