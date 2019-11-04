import React, { Component } from 'react';

// when creating a class component, I have to import the 'Component' from react,
// and extend my class from it
// naming: it should be just Button, ClassButton here is just for the sake of the example
// always uppercase!

// stateful/class/smart/container component
export default class ClassButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
    this.handleClick = this.handleClick.bind(this);
    // I use this.setState in this function, so I have to bind the 'this' keyword
    // without the binding, the 'this' keyword in the handleClick function would
    // be undefined
  }

  // with binding:
  handleClick() {
    this.setState({ loggedIn: !this.state.loggedIn });
  }

  // without binding, I could just use the arrow syntax
  handleClick = () => {
    this.setState({ loggedIn: !this.state.loggedIn });
  }

  // naming of the event handler function should be descriptive
  // usually: handle + event, or sg. similar 
  //   - (handleLogin, handleIncrement, handleRegister, etc.)

  render() {
    return (
      <React.Fragment>
        {/* I can use props in class components too: */}
        <h1>{this.props.title}</h1>

        {/*  handling events: similar to DOM events we've learnt, but with camelCase
             in class components, we must use the 'this' keyword */}
        <button onClick={this.handleClick}>
          {this.state.loggedIn ? `I'm logged in` : `I'm logged out`}
        </button>

      </React.Fragment>

    )
  }
}