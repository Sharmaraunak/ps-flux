import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>Raunak Kumar Sharma</h1>
      <p>Making this app from morning.</p>
      <>
        <Link to="about" className="btn btn-primary">
          About
        </Link>
        {"   "}
        <Link to="courses" className="btn btn-secondary">
        courses
        </Link>
      </>
    </div>
  );
};

export default HomePage;
