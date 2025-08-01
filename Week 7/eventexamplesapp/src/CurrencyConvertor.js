import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      currency: "Euro"
    };
  }

  handleAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  handleCurrencyChange = (e) => {
    this.setState({ currency: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { amount, currency } = this.state;
    let convertedAmount;

    if (currency === "Euro") {
      convertedAmount = amount * 80;
    } else if (currency === "Dollar") {
      convertedAmount = amount * 70;
    } else {
      convertedAmount = amount;
    }

    alert(`Converting to ${currency} Amount is ${convertedAmount}`);
  };

  render() {
    return (
      <div>
        <h1 style={{ color: 'green', fontSize: '32px', fontWeight: 'bold' }}>
          Currency Convertor!!!
        </h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Amount:</label>
            <input
              type="number"
              value={this.state.amount}
              onChange={this.handleAmountChange}
              required
            />
          </div>

          <div>
            <label>Currency:</label>
            <select
              value={this.state.currency}
              onChange={this.handleCurrencyChange}
            >
              <option value="Euro">Euro</option>
              <option value="Dollar">Dollar</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;
