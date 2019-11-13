import React, {Component} from "react";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			base: "",
			topping1: true,
			topping2: true,
			topping3: true,
			cut: "true"
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const {name, value, type, checked} = event.target;
		type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
	}


	render() {
		return (
			<div>
				<h1>Choose your pizza base:</h1>
				<form>
					Piazza base:<select value={this.state.base}
					                    onChange={this.handleChange}
					                    name="base">
					<option value="base1">base1</option>
					<option value="base2">base2</option>
					<option value="base3">base3</option>
				</select>
					<br/>
					<h1>Choose your topping:</h1>
					Topping 1<input
					type="checkbox"
					name="topping1"
					checked={this.state.topping1}
					onChange={this.handleChange}/>

					Topping 2<input
					type="checkbox"
					name="topping2"
					checked={this.state.topping2}
					onChange={this.handleChange}/>

					Topping 3<input
					type="checkbox"
					name="topping3"
					checked={this.state.topping3}
					onChange={this.handleChange}/>

					<br/>
					<h1>Cut it ?</h1>

					<label>
						Yes <input type="radio"
						           name="cut"
						           value="true"
						           checked={this.state.cut}
						           onChange={this.handleChange}/>
					</label>
					<label>
						No <input type="radio"
						          name="cut"
						          value="false"
						          checked={this.state.cut}
						          onChange={this.handleChange}/>
					</label>

					<br/>
					<h1>Leave your comments:</h1>
					<textarea>
					</textarea>
					<div></div>
					<input type="submit" value="Submit"/>
					<h1>{this.state.topping1}</h1>
				</form>
			</div>
		);
	}
}

export default App;
