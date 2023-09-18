import React from "react";

const Head = () => {
  return (
    <div>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>NSWGAMING</h1>
            <span>I'm styding Reactjs</span>
          </div>

          <div className="social">
            <a
              href="https://www.facebook.com/nephechua"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f icon"></i>
            </a>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Head;
