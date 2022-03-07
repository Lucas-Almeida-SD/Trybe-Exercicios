import React from "react";

class RadioInput extends React.Component {
  checked(tipo, value) {
    if (tipo === value) {
      return true;
    }
    return false;
  }

  render() {
    const { value, text, tipo, onChange } = this.props;
    return (
      <div>
      <input
        type="radio"
        name="tipo"
        value={value}
        id={value}
        onChange={ onChange }
        checked={ this.checked(tipo, value) }
        required
      />
      <label htmlFor={value}>{text}</label>
      </div>
    );
  }
}

export default RadioInput;