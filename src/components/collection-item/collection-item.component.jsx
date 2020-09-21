import React from "react";
import { connect } from "react-redux";
import "./collection-item.styles.scss";
import FormButton from "../form-elements/form-button.component";

import { addToCart } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addToCart }) => {
  const { name, imageUrl, price } = item;

  return (
    <article className="collection-item">
      <div className="collection-item--overlay">
        <FormButton onClick={() => addToCart(item)} inverted>
          ADD TO CART
        </FormButton>
      </div>
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

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
