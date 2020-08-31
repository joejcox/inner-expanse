import React from "react";
import "./cta.styles.scss";
import { withRouter } from "react-router-dom";

const Cta = ({ linkUrl, title, imageUrl, size, history, match }) => {
  return (
    <article
      className={size ? `${size} cta` : "cta"}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="cta--background"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="cta--content">
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </div>
    </article>
  );
};

export default withRouter(Cta);
