import React from "react";
import states from "./helpers/brazilianStates";

class Select extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label>Estado: </label>
        <select name="estado" value={ value } onChange={ onChange }>
          {states.map((element) =>
            <option key={element} name={element}>{element}</option>)}
        </select>
      </div>
    );
  }
}

export default Select;