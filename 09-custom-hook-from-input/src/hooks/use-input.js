import { useReducer } from "react";

const InitialState = {
  value: "",
  isTouch: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return {
        value: action.value,
        isTouch: state.isTouch,
      };

    case "BLUR":
      return {
        isTouch: true,
        value: state.value,
      };

    case "RESET":
      return InitialState;
    default:
      return InitialState;
  }
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, InitialState);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouch;

  const valueChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
