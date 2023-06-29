import React, { useState } from "react";
import ItemList from "../items/ItemList.js";
import "../form/ItemForms.css";

let count = 0;

const ItemForm = () => {
  const [Items, setItems] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const newItem = {
      id: count,
      title: e.target[0].value,
    };
    if (!newItem) return;
    setItems((prevItems) => {
      return [newItem, ...prevItems];
    });

    console.log(Items);
    e.target[0].value = "";
    count++;
  };

  const deleteItem = (item) => {
    const newItems = Items.filter((el) => el.id !== item.id);
    setItems(newItems);
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="item-input">
        <input
          className="item-input__txt"
          type="text"
          placeholder="To Do List"
        ></input>
        <input
          className="item-input__submit"
          type="submit"
          id="submit"
          value="+"
        ></input>
      </form>
      {Items.map((el) => {
        return <ItemList key={el.id} item={el} onDelete={deleteItem} />;
      })}
    </div>
  );
};

export default ItemForm;
