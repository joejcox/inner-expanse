import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({ name, imageUrl, price }) => {
  return (
    <article className="collection-item">
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

export default CollectionItem;
