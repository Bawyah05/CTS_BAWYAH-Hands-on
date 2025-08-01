import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;

    let content;
    if (isLoggedIn) {
      content = (
        <div>
          <h2 style={{ color: "green" }}>Welcome User!</h2>
          <p>You can now book your flight tickets below.</p>
          <button onClick={this.handleLogout}>Logout</button>
          <hr />
          <h3>Flight Booking Section</h3>
          <ul>
            <li>Flight: AI203 | From: Delhi | To: Mumbai | Fare: ₹4000</li>
            <li>Flight: AI204 | From: Chennai | To: Bangalore | Fare: ₹3500</li>
            <li>Flight: AI205 | From: Pune | To: Goa | Fare: ₹3000</li>
          </ul>
          <button>Book Ticket</button>
        </div>
      );
    } else {
      content = (
        <div>
          <h2 style={{ color: "blue" }}>Welcome Guest!</h2>
          <p>Please log in to book your tickets.</p>
          <button onClick={this.handleLogin}>Login</button>
          <hr />
          <h3>Available Flights</h3>
          <ul>
            <li>Flight: AI203 | From: Delhi | To: Mumbai</li>
            <li>Flight: AI204 | From: Chennai | To: Bangalore</li>
            <li>Flight: AI205 | From: Pune | To: Goa</li>
          </ul>
        </div>
      );
    }

    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1 style={{ textAlign: "center", color: "#444" }}>Ticket Booking App</h1>
        {content}
      </div>
    );
  }
}

export default App;
