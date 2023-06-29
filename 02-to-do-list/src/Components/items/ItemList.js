import React from "react";
import Item from "./item/Item.js";
import "./ItemList.css";

const ItemList = (probs) => {
  const removeItem = () => {
    probs.onDelete(probs.item);
  };

  return (
    <div className="items-list">
      <ul className="items">
        <Item item={probs.item} remove={removeItem} />
      </ul>
    </div>
  );
};

export default ItemList;
