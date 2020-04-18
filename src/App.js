import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    //state is the attribute of Component class
    this.state = {
      string: "hello sonish cha",
    };
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.string}</h1>
        <button onClick={() => this.setState({ string: "helo sumuki" })}>
          Change Text
        </button>
      </div>
    );
  }
}

export default App;
