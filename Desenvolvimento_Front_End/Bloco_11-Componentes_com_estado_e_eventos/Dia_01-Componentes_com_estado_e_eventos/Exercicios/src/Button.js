import React from "react";
import './Button.css';

class Button extends React.Component {
  render() {
    const { onClick, nameBtn } = this.props;
    return (
      <div className="btn-div">
         <button 
          className={nameBtn}
          onClick={onClick}
        >
          {nameBtn}
        </button>
      </div>
    );
  }
}

export default Button;
