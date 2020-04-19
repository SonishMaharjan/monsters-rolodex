import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    //state is the attribute of Component class
    this.state = {
      monsters: [
        { name: "Frankestein", id: "mon1" },
        { name: "Dracula", id: "mon2" },
        { name: "Zombie", id: "mon3" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
