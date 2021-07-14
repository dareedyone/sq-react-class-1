import React from "react";
import logo from "./logo.svg";
import Button from "./components/Button";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: "",
			input1: 0,
			input2: 0,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleAddition = this.handleAddition.bind(this);
	}

	handleAddition() {
		const display = Number(this.state.input1) + Number(this.state.input2);
		this.setState({ display });
	}

	handleChange(event, input) {
		this.setState({ [input]: event.target.value });
	}

	componentDidMount() {
		document.addEventListener("click", () => alert("yoooooo!!"));
		console.log("has mount");
	}

	componentDidUpdate() {
		console.log("did update");
	}

	componentWillUnmount() {
		//cleanups
		console.log("has unmount");
	}

	render() {
		return (
			<div className="App">
				<h1>{this.state.display}</h1>
				<input
					type="number"
					onChange={(event) => this.handleChange(event, "input1")}
					value={this.state.input1}
				/>
				<input
					type="number"
					onChange={(event) => this.handleChange(event, "input2")}
					value={this.state.input2}
				/>
				<Button handleAddition={this.handleAddition} />
			</div>
		);
	}
}

export default App;
