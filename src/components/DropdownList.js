import React from "react";

import { Dropdown } from "semantic-ui-react";
import "./DropdownList.css";
class DropdownList extends React.Component {
  allUnits = this.props.allUnits.map(item => ({
    key: item,
    text: item,
    value: item
  }));

  render() {
    return (
      <div>
        <Dropdown
          placeholder="Measurement Type"
          selection
          className="type-select"
          options={this.allUnits}
          onChange={this.props.handleTypeChange}
        />
        <div>
          <Dropdown
            placeholder="Select Unit"
            selection
            name="unitOne"
            className="unit-select"
            options={this.props.unitTypes}
            onChange={this.props.handleUnitChange}
          />
          <Dropdown
            placeholder="Select Unit"
            selection
            name="unitTwo"
            className="unit-select"
            options={this.props.unitTypes}
            onChange={this.props.handleUnitChange}
          />
        </div>
        {console.log("render")}
      </div>
    );
  }
}

export default DropdownList;
