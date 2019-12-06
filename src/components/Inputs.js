import React from "react";
import { Input } from "semantic-ui-react";

const Inputs = props => {
  return (
    <Input
      // placeholder={props.name}
      className="number-input"
      onChange={props.handleChange}
      type="number"
      name={props.name}
      value={props.value}
    />
  );
};

export default Inputs;
