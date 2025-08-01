import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    console.log("Hello! Increment button clicked");
  };

  sayWelcome = (msg) => {
    alert("Welcome! Message: " + msg);
  };

  handleClick = (e) => {
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h3>{this.state.count}</h3>
        <button onClick={this.increment}>Increment</button>{' '}  <br></br>
        <button onClick={this.decrement}>Decrement</button>{' '}   <br></br>
        <button onClick={() => this.sayWelcome("welcome")}>Say welcome</button>{' '}  <br></br>
        <button onClick={this.handleClick}>Click on me</button><br></br>

        <hr />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
