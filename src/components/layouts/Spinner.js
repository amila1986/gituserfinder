import React, { Fragment } from "react";
import sppiner from "./spinner.gif";

export const Spinner = () => {
  return (
    <Fragment>
      <img
        src={sppiner}
        alt="Loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};
export default Spinner;
