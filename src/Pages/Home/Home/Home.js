import React from "react";
import Navigation from "../../../Shared/Navigation/Navigation";
import Services from "../../Services/Services/Services";

import Banner from "../Banner/Banner";
import Partners from "../Partners/Partners";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Partners></Partners>
      <Services></Services>
    </div>
  );
};

export default Home;
