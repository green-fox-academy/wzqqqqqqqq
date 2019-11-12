import React, {Component} from "react";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
            email: "",
            passwordError: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    validate() {
        let passwordError = "";

        if (this.state.password.length < 8) {
            passwordError = "PassWord should be at least 8 characters";
        }
        if (passwordError) {
            this.setState({passwordError});
            return false;
        }
        return true;
    }

    handleSubmit(event) {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState({passwordError: ""});
        }
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="userName"
                            placeholder="Username "
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                    <div></div>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            placeholder="password "
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                    <div style={{fontSize: 11, color: "red"}}>
                        {this.state.passwordError}
                    </div>

                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            placeholder="Email "
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                    <div></div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default App;
