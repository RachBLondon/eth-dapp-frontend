import React, { Component } from "react";
import "./App.css";
import abi from "./Inbox.js";
import Inbox from "./Inbox.js";
import web3 from "./web3";

class App extends Component {
  state = {
    message: "",
    value: "",
    transactionState : ""
  };

  async componentDidMount() {
    const message = await Inbox.methods.getMessage().call();
    this.setState({ message });
  }

  submit = async event => {
    event.preventDefault();
    console.log('value :', this.state.value)
    const enable = await window.ethereum.enable().then(console.log);
    const accounts = await web3.eth.getAccounts();
    this.setState({ transactionState: "waiting on transaction success" });

    await Inbox.methods.setMessage(this.state.value).send({
      from: accounts[0],
      inputs: this.state.value
    });

    this.setState({ transactionState : "Transaction complete",  });
    const callContract = async ()=> {
      const message = await Inbox.methods.getMessage().call();
      this.setState({ message });
    }
    callContract();
  };

  render() {
    console.log(abi);
    return (
      <div className="App">
        <h1>Rinkeby Noticeboard </h1>
        <p>Message :</p>{this.state.message}
        <form onSubmit={this.submit}>
          <label>Change the message </label>
          <input
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
          />
          <button>Enter</button>
        </form>
        {this.state.transactionState}
      </div>
    );
  }
}

export default App;
