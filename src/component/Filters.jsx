import React, { useState } from "react";

const Filters = () => {
  const [filter, setFilter] = useState([]);

  return (
    <div className="form-group">
      <label for="exampleFormControlSelect1">Categorias</label>
      <select className="form-control" id="exampleFormControlSelect1">
        <option>Powder</option>
        <option>Cream </option>
        <option>Pencil</option>
        <option>Liquid </option>
        <option>Gel</option>
        <option>Palette </option>
        <option>Contour</option>
        <option>Bb cc </option>
        <option>Concealer</option>
        <option>Mineral </option>
        <option>Powder </option>
        <option>Highlighter </option>
        <option>Lipstick </option>
        <option>Lip gloss</option>
        <option>Lip stain </option>
      </select>
    </div>
  );
};

export default Filters;
