import React, { Component } from "react";

class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };
  constructor(p) {
    super(p);
    this.intervalid = null;
  }

  componentDidMount() {
    this.intervalid = setInterval(() => {
      setInterval(() => {
        this.setState({
          time: new Date().toLocaleTimeString(),
        });
      }, 1000);
    });
  }

  render() {
    return (
      <>
        <div></div>
      </>
    );
  }
}

export default Clock;
