import React, { useReducer } from "react";
import Alertcontext from "./AlertContext";
import AlertReducer from "./AlertReducer";

import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Set alert method

  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    });

    setTimeout(() => dispatch({ REMOVE_ALERT }), 3000);
  };

  return (
    <Alertcontext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </Alertcontext.Provider>
  );
};
export default AlertState;
