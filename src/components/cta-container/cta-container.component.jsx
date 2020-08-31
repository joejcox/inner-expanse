import React from "react";
import "./cta-container.styles.css";
import Cta from "../cta/cta.component.jsx";

class CtaContainer extends React.Component {
  render() {
    const sections = [
      {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        linkUrl: "shop/hats",
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: "shop/jackets",
      },
      {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        linkUrl: "shop/sneakers",
      },
      {
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
        id: 4,
        linkUrl: "shop/womens",
      },
      {
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large",
        id: 5,
        linkUrl: "shop/mens",
      },
    ];

    return (
      <section className="cta__container">
        {Object.values(sections).map(
          ({ linkUrl, title, id, imageUrl, size }) => {
            return (
              <Cta
                key={id}
                slug={linkUrl}
                name={title}
                image={imageUrl}
                size={size}
              />
            );
          }
        )}
      </section>
    );
  }
}

export default CtaContainer;
