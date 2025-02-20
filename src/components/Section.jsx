import React from "react";
import { Link } from "react-router-dom";
import "../styles/Section.css";

const Section = ({ title, position, link }) => {
  return (
    <Link to={link} className={`section ${position}`}>
      {title}
    </Link>
  );
};

export default Section;
