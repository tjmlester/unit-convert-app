import React from "react";

import convert from "convert-units";
import Inputs from "./components/Inputs";
import DropdownList from "./components/DropdownList";
import "./index.css";

class App extends React.Component {
  state = {
    valueOne: null,
    valueTwo: null,
    unitOne: null,
    unitTwo: null,
    measurementType: "",
    unitTypes: []
  };

  allUnits = convert().measures();
  unitTypes = convert(this.state.measurementType).possibilities();

  // converts other input field
  handleConvert = field => {
    if (
      (this.state.valueOne !== null || this.state.valueTwo !== null) &&
      this.state.unitOne !== null &&
      this.state.unitTwo !== null
    ) {
      if (field === "One") {
        this.setState({
          valueTwo: convert(this.state.valueOne)
            .from(this.state.unitOne)
            .to(this.state.unitTwo)
        });
      } else if (field === "Two") {
        this.setState({
          valueOne: convert(this.state.valueTwo)
            .from(this.state.unitTwo)
            .to(this.state.unitOne)
        });
      }
    }
  };

  // change what is entered in the input fields
  handleChange = e => {
    if (e.target.name === "fieldOne") {
      this.setState(
        {
          valueOne: e.target.value
        },
        () => this.handleConvert("One")
      );
    } else if (e.target.name === "fieldTwo") {
      this.setState(
        {
          valueTwo: e.target.value
        },
        () => this.handleConvert("Two")
      );
    }
  };

  // change measurement type
  handleTypeChange = (e, data) => {
    let temp = convert().possibilities(`${data.value}`);
    let unitTypes = temp.map(item => ({
      key: item,
      text: item,
      value: item
    }));

    this.setState({
      measurementType: data.value,
      unitTypes: unitTypes,
      unitOne: null,
      unitTwo: null
    });
  };

  // change the first/second unit
  handleUnitChange = (e, data) => {
    if (data.name === "unitOne") {
      this.setState(
        {
          unitOne: data.value
        },
        () => this.handleConvert("One")
      );
    } else if (data.name === "unitTwo") {
      this.setState(
        {
          unitTwo: data.value
        },
        () => this.handleConvert("Two")
      );
    }
  };

  render() {
    return (
      <div>
        <h2>Unit Converter</h2>

        <div>
          <DropdownList
            allUnits={this.allUnits}
            handleTypeChange={this.handleTypeChange}
            handleUnitChange={this.handleUnitChange}
            measurementType={this.state.measurementType}
            unitTypes={this.state.unitTypes}
            unitOne={this.state.unitOne}
            unitTwo={this.state.unitTwo}
          />
          {console.log(this.state.measurementType)}
          {console.log(this.state.unitTypes)}
        </div>
        <div>
          <Inputs
            handleChange={this.handleChange}
            name="fieldOne"
            value={this.state.valueOne}
          />
          <Inputs
            handleChange={this.handleChange}
            name="fieldTwo"
            value={this.state.valueTwo}
          />
        </div>
      </div>
    );
  }
}

export default App;
