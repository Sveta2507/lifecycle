import React, { Component } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Clock from "./components/Clock/Clock";
import Tabs from "./components/Tabs/Tabs";
import phrases from "./components/phrases.json";

class App extends Component {
  state = {
    showModal: false,
    time: false,
  };

  openModal = () => {
    this.setState((state) => {
      return {
        showModal: !state.showModal,
      };
    });
  };

  showTime = () => {
    this.setState((state) => {
      return {
        time: !state.time,
      };
    });
  };

  render() {
    return (
      <>
        <h1>Hello</h1>
        <h2>World</h2>
        <button type="button" onClick={this.openModal}>
          click
        </button>
        {this.state.showModal && (
          <Modal onClose={this.openModal}>
            <h2>Hey there</h2>
            <p>i see you</p>
            <button onClick={this.openModal}>close me</button>
          </Modal>
        )}
        <button type="button" onClick={this.showTime}>
          Show Time
        </button>
        {this.state.time && <Clock />}
        <Tabs phrases={phrases} />
      </>
    );
  }
}

export default App;
