import React from "react";
import { withRouter } from "react-router-dom";
import "./collection-item.styles.scss";

const CollectionItem = ({ name, imageUrl, price, history }) => {
  return (
    <article
      className="collection-item"
      onClick={() => history.push(`/shop/products/${name}`)}>
      <div className="collection-item--image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="collection-item--footer">
        <span className="collection-item--title">{name}</span>
        <span className="collection-item--price">£{price}</span>
      </div>
    </article>
  );
};

export default withRouter(CollectionItem);
