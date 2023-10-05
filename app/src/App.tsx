import React, { Component } from "react";
import "./App.css";
import Components from "./Components";
class App extends Component {
  state = {
    firstName: "",
    secondName: "",
    age: "",
  };
  handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ firstName: e.target.value });
  };
  handleSecondNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ secondName: e.target.value });
  };
  handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ age: e.target.value });
  };
  display = () => {
    console.log(this.state);
  };
  render() {
    const { Button, Input } = Components;
    return (
      <div className="App">
        <header className="App-header">
          <Input
            name="First Name"
            type="text"
            placeholder="Enter your First name"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
          />
          <Input
            name="Second Name"
            type="text"
            placeholder="Enter your Second name"
            value={this.state.secondName}
            onChange={this.handleSecondNameChange}
          />
          <Input
            name="Your Age"
            type="number"
            placeholder="Enter your age"
            value={this.state.age}
            onChange={this.handleAgeChange}
          />
          <Button onClick={this.display} name="Submit" />
        </header>
      </div>
    );
  }
}
export default App;
