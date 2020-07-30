import React, { useState, useEffect } from "react";
import axios from "axios";
import IconsMakeUp from "./IconsMakeUp";
import Card from "./Card";

const CardMakeUp = ({ filters }) => {
  const [makeup, setMakeup] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      )
      .then(response => {
        setMakeup(response.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Maybelline</h1>
      <div className="wrapper">
        {makeup.map(item => {
          return <Card item={item} />;
        })}
      </div>
    </div>
  );
};

export default CardMakeUp;
