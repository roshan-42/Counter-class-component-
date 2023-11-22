import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };

    // Bind the increment function to the current instance
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.neutral = this.neutral.bind(this);
  }

  increment() {
    this.setState({ number: this.state.number + 1 });
  }
  decrement() {
    this.setState({ number: this.state.number - 1 });
  }
  neutral() {
    this.setState({ number: 0 });
  }
  render() {
    return (
      <div className="row justify-content-center">
        <div
          className="col-md-5"
          style={{ marginTop: "200px", border: "5px solid black" }}
        >
          <h1>React Counter</h1>
          <h1>{this.state.number}</h1>
          <button className="btn btn-primary" onClick={this.increment}>
            Increment
          </button>
          <button onClick={this.decrement} className="btn btn-danger">
            Decrement
          </button>
          <button onClick={this.neutral} className="btn btn-info">
            Neutral
          </button>
        </div>
      </div>
    );
  }
}

export default Main;
