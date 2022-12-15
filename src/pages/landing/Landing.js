import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga";
import "./Landing.css";

function Landing() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div className="landing">
      <h1>Giftify</h1>
      <p>Se acabo de pensar que regalar, deja que Giftify decida por ti ❤ </p>
      <Link to={"/categories"} className="btn">
        Comenzar
      </Link>
    </div>
  );
}

export default Landing;
