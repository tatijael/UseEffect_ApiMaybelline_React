import React from "react";
import "./styles.css";
import CardMakeUp from "./component/CardMakeUp";
import Filters from "./component/Filters";
import PopularidadMake from "./component/PopularidadMake";
import Card from "./component/Card";

export default function App() {
  return (
    <div>
      <Filters />
      <CardMakeUp filters={{ tags: "Vegan" }} card={Card} />
      <PopularidadMake />
    </div>
  );
}
