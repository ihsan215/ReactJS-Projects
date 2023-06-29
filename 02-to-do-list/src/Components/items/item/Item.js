import React from "react";
import "./Item.css";

const Item = (probs) => {
  const checkHandler = () => {
    probs.remove(probs.item.id);
  };

  return (
    <div>
      <li className="item">
        <input onChange={checkHandler} className="item-check" type="checkbox" />
        {probs.item.title}
      </li>
    </div>
  );
};

export default Item;
