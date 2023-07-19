import React from "react";
import { useReducer, useRef, useState } from "react";

import Button from "../UI/Button.js";
import Modal from "../UI/Modal.js";
import UserInputForm from "../forms/UserInputForms.js";
import Message from "../UI/Message.js";

import icon from "../../assets/icon.svg";
import classes from "./Header.module.css";

const defaultBtnsState = {
  isModalShow: false,
  text: "",
  modalFunc: () => {},
};

const BtnsReducer = (_, action) => {
  switch (action.type) {
    case "SIGN IN": {
      const ModalMsg = "";
      const signInFunc = async (e) => {
        e.preventDefault();

        const userMail = action.ref.current[0].value;
        const userPassword = action.ref.current[1].value;
        const userCheckPassword = action.ref.current[2].value;

        if (userMail.length <= 5) {
          action.setIsMsgShow(true);
          action.setIsSpinnerShow(false);
          action.setModalMsg("Please enter a valid mail address !");
          return;
        }

        if (userPassword !== userCheckPassword) {
          action.setIsMsgShow(true);
          action.setIsSpinnerShow(false);
          action.setModalMsg("Passwords are not match! Please try again");
          return;
        }

        const USER = {
          userMail: userMail,
          userPassword: userPassword,
        };

        action.setIsMsgShow(true);
        action.setIsSpinnerShow(true);
        action.setModalMsg("Registration in progress ...");
        const data = await fetch(
          "https://shopping-b4da6-default-rtdb.firebaseio.com/Users.json",
          {
            method: "POST",
            body: JSON.stringify(USER),
            headers: {
              "Content-Type": "userInfo/json",
            },
          }
        );

        if (data.ok) {
          action.setIsMsgShow(true);
          action.setIsSpinnerShow(false);
          action.setModalMsg("Registration is completed");
        } else {
          action.setIsMsgShow(true);
          action.setIsSpinnerShow(false);
          action.setModalMsg(
            "Registration is not completed. Please try again !"
          );
        }
      };

      return {
        isModalShow: true,
        text: "SIGN IN",
        modalFunc: signInFunc,
        modalMsg: "",
      };
    }

    case "LOGIN":
      const Login = async (e) => {
        e.preventDefault();
        const userMail = action.ref.current[0].value;
        const userPassword = action.ref.current[1].value;

        action.setIsMsgShow(true);
        action.setIsSpinnerShow(true);
        action.setModalMsg("Logging...");

        const response = await fetch(
          "https://shopping-b4da6-default-rtdb.firebaseio.com/Users.json"
        );
        const data = await response.json();
        const UsersData = Object.values(data);
        const User = UsersData.find((item) => {
          return item.userMail === userMail;
        });
        if (User.userPassword !== userPassword) {
          action.setIsSpinnerShow(false);
          action.setModalMsg("Wrong Password !");
          return;
        }
        action.setIsMsgShow(true);
        action.setIsSpinnerShow(false);
        action.setModalMsg("Your In !");
        console.log("Login", User);
      };
      return { isModalShow: true, text: "LOGIN", modalFunc: Login };

    case "CLOSE":
      return defaultBtnsState;

    default:
      return defaultBtnsState;
  }
};

const Header = () => {
  const [BtnsState, dispatchAction] = useReducer(BtnsReducer, defaultBtnsState);
  const formInputRef = useRef();
  const [isMsgShow, setIsMsgShow] = useState(false);
  const [isSpinnerShow, setIsSpinnerShow] = useState(false);
  const [modalMsg, setModalMsg] = useState("");

  const closeModal = () => {
    dispatchAction({ type: "CLOSE" });
  };

  const clickBtn = (e) => {
    setIsMsgShow(false);
    dispatchAction({
      type: e.target.textContent,
      ref: formInputRef,
      setIsMsgShow: setIsMsgShow,
      setIsSpinnerShow: setIsSpinnerShow,
      setModalMsg: setModalMsg,
    });
  };

  return (
    <React.Fragment>
      <header className={classes["main-header"]}>
        <img src={icon} alt="icon" />
        <h1 className={classes["header-title"]}>Shopping App</h1>
        <div className={classes["header-btn-area"]}>
          <Button onClick={clickBtn}>SIGN IN</Button>
          <Button onClick={clickBtn}>LOGIN</Button>
        </div>
      </header>

      {BtnsState.isModalShow && (
        <Modal onClose={closeModal}>
          {isMsgShow ? (
            <Message isSpinnerShow={isSpinnerShow} msg={modalMsg} />
          ) : (
            <UserInputForm
              ref={formInputRef}
              onSubmit={BtnsState.modalFunc}
              value={BtnsState.text}
            />
          )}
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Header;
