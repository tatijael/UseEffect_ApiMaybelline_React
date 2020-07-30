import React from "react";
import IconsMakeUp from "./IconsMakeUp";

const Card = ({ item }) => {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img src={item.image_link} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{item.description}</p>
        <p className="card-text">Price $ {item.price}</p>
        {item.rating && (
          <p className="card-text">
            Popularity <IconsMakeUp icon="start" score={item.rating * 2} />
          </p>
        )}
        <p className="card-text">Product Type: {item.product_type}</p>
      </div>
    </div>
  );
};

export default Card;
