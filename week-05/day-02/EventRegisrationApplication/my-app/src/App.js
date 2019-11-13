import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      list: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { firstName, lastName, emailAddress } = this.state;
    this.setState({ list: [firstName, lastName, emailAddress] });
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            First name:
            <input
              type="text"
              name="firstName"
              placeholder="First name "
              onChange={this.handleChange}
              required
            />
          </label>

          <label>
            Last name:
            <input
              type="text"
              name="lastName"
              placeholder="Last name "
              onChange={this.handleChange}
              required
            />
          </label>

          <label>
            Email address:
            <input
              type="text"
              name="emailAddress"
              placeholder="Email address "
              onChange={this.handleChange}
              required
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {list.length === 0 ? null : <h1>Result</h1>}
        <ul>
          <li>First name: {list[0]}</li>
          <li>Last name:{list[1]}</li>
          <li>Email address:{list[2]}</li>
        </ul>
      </div>
    );
  }
}

export default App;
