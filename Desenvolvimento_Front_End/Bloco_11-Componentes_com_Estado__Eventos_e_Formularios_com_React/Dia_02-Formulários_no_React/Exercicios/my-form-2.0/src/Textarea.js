import React from "react";

class Textarea extends React.Component {
  render() {
    const { text, value, name, rows, cols, maxLength, onChange } = this.props;
    return (
      <div>
        <label>{text}: </label>
        <br/>
        <textarea
          value={value}
          name={name}
          rows={rows}
          cols={cols}
          maxLength={maxLength}
          onChange={onChange}
          required
        />
      </div>
    )
  }
}
export default Textarea;