import React from "react";
import logo from "../../logo.svg";
import ItemForm from "../form/ItemForms.js";

import "./ListForm.css";

const ListForm = () => {
  return (
    <div className="container">
      <div className="app-area">
        <h1 className="app-title">
          <img src={logo} className="logo"></img> React | To Do App
        </h1>
        <ItemForm />
      </div>
    </div>
  );
};

export default ListForm;
