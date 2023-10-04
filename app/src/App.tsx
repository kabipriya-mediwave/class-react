// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;
import React, { Component } from "react";
import Components from "./Components";
interface AppState {
  firstName: string;
  lastName: string;
  age: string;
}
class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
    };
  }
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log(this.state);
  };
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value } as Pick<
      AppState,
      keyof AppState
    >);
  };
  render() {
    const { Button, Input } = Components; 
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
          <Input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
          <Input
            type="text"
            placeholder="Age"
            name="age"
            value={this.state.age}
            onChange={this.handleInputChange}
          />
          <Button label="Submit" />
        </form>
      </div>
    );
  }
}
export default App;
