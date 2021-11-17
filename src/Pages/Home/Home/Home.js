import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/Navigation/Navigation";
import OurService from "../../OurService/OurService/OurService";
import Services from "../../Services/Services/Services";

import Banner from "../Banner/Banner";
import Newsletter from "../NewsLetter/NewsLetter";
import Partners from "../Partners/Partners";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Partners></Partners>
      <OurService></OurService>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
