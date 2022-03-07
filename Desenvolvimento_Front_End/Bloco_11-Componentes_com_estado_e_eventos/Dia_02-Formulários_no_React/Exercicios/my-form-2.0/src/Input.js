import React from "react";

class Input extends React.Component {
  render() {
    const { type, name, maxLength, text, value, onChange } = this.props;
    return (
      <div>
        <label>{text}: </label>
        <input
          type={type}
          name={name}
          value={value}
          maxLength={maxLength}
          onChange={ onChange }
          required/>
      </div>
    )
  }
}

export default Input;