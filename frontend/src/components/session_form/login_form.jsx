import React from "react";
import { withRouter } from "react-router-dom";
import "./login_form.css";

class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			errors: {},
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.currentUser === true) {
			this.props.history.push("/liquids");
		}

		this.setState({ errors: nextProps.errors });
	}

	update(field) {
		return (e) =>
			this.setState({
				[field]: e.currentTarget.value,
			});
	}

	handleSubmit(e) {
		e.preventDefault();

		let user = {
			username: this.state.username,
			password: this.state.password,
		};

		this.props.login(user);
	}

	renderErrors() {
		return (
			<ul>
				{Object.keys(this.state.errors).map((error, i) => (
					<li key={`error-${i}`}>{this.state.errors[error]}</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="background">
				<div className="login-form-container">
					<form onSubmit={this.handleSubmit}>
						<input
							autofocus
							type="text"
							value={this.state.username}
							onChange={this.update("username")}
							placeholder="Username"
						/>
						<br />
						<input
							type="password"
							value={this.state.password}
							onChange={this.update("password")}
							placeholder="Password"
						/>
						<br />
						<button type="submit" value="Submit">
							Log In
						</button>

						<button type="submit" value="Submit">
							Demo Login
						</button>
						{this.renderErrors()}
					</form>
				</div>
			</div>
		);
	}
}

export default withRouter(LoginForm);
