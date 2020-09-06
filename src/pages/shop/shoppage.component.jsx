import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <main className="shop-page">
        <div className="container">
          <h1 className="page-title">Collections</h1>
          {collections.map(({ id, ...otherCollectionProps }) => {
            return <CollectionPreview key={id} {...otherCollectionProps} />;
          })}
        </div>
      </main>
    );
  }
}

export default ShopPage;
