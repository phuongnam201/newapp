import React from "react";
import "./hero.css";
import Heading from "../../common/heading/Heading";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              title={"WELCOME TO ACADEMI"}
              subTitle={"Best Online Education"}
            />
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="primary-btn">
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="marigin"></div>
    </div>
  );
};

export default Hero;
