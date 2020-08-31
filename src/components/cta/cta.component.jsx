import React from "react";
import "./cta.styles.scss";

const Cta = ({ slug, name, image, size }) => {
  return (
    <article className={size ? `${size} cta` : "cta"}>
      <div
        className="cta--background"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="cta--content">
        <h2>{name}</h2>
        <a href={`/${slug}`}>Shop Now</a>
      </div>
    </article>
  );
};

export default Cta;
