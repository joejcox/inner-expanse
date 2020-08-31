import React from "react";
import "./homepage.styles.scss";
import CtaContainer from "../../components/cta-container/cta-container.component";

const Homepage = () => {
  return (
    <main className="homepage">
      <div className="container">
        <CtaContainer />
      </div>
    </main>
  );
};

export default Homepage;
