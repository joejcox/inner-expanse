import React from "react";
import { withRouter } from "react-router-dom";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component.jsx";
import FormButton from "../form-elements/form-button.component";

const CollectionPreview = ({ title, items, routeName, history }) => {
  return (
    <section className="collection-preview">
      <header>
        <h2
          className="collection-title"
          onClick={() => history.push(`/shop/${routeName}`)}>
          {title}
        </h2>
        <p className="collection-description">
          Collection description here perhaps
        </p>
      </header>
      <div className="collection-items">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
      <footer>
        <FormButton
          inverted
          classes="thin"
          onClick={() => history.push(`/shop/${routeName}`)}>
          View All {title}
        </FormButton>
      </footer>
    </section>
  );
};

export default withRouter(CollectionPreview);
