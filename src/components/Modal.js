import React, { Component } from "react";
import classes from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.removeEventListener);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.removeEventListener);
  }
  removeEventListener = (event) => {
    if (event.key === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    console.log(this.props.children);
    return (
      <div className={classes.background}>
        <div className={classes.window}>{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
