import React from "react";
import "./session_form.css";

class SessionForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			password2: "",
			hidden: true,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDemo = this.handleDemo.bind(this);
		this.toggleShow = this.toggleShow.bind(this);
	}

	componentDidMount() {
		if (this.props.errors.length > 0) {
			this.props.clearErrors();
		}
	}

	update(field) {
		return (e) => this.setState({ [field]: e.currentTarget.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		let user = Object.assign({}, this.state);
		this.props.processForm(user).then(() => {
			this.props.errors.length <= 0 ? this.props.closeModal() : (user = null);
		});
	}

	handleDemo(e) {
		e.preventDefault();
		this.props.processDemo({
			username: "demousername",
			password: "demopassword",
		});
		this.props.closeModal();
	}

	toggleShow() {
		this.setState({ hidden: !this.state.hidden });
	}

	renderErrors() {
		return (
			<ul>
				{this.props.errors.map((error, i) => (
					<li className="errors" key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		let password2;
		if (this.props.formType === "Sign Up") {
			password2 = (
				<>
					<input
						type="password"
						value={this.state.password2}
						onChange={this.update("password2")}
						placeholder="Confirm password"
					/>
					<br />
				</>
			);
		}

		let demo;
		if (this.props.formType === "Log In") {
			demo = (
				<button type="submit" value="Submit" onClick={this.handleDemo}>
					Demo Login
				</button>
			);
		}
		if (this.props.formType === "Log in") {
			password2 = null;
		}
		return (
			<div className="session-background">
				<div className="session-form-container">
					<i className="fas fa-times" onClick={this.props.closeModal} />
					<form onSubmit={this.handleSubmit}>
						<input
							type="text"
							value={this.state.username}
							onChange={this.update("username")}
							placeholder="Username"
						/>
						<br />
						<input
							type={this.state.hidden ? "password" : "text"}
							value={this.state.password}
							onChange={this.update("password")}
							placeholder="Password"
						/>
						<span className="eye-icon">
							<i
								className={this.state.hidden ? "fa fa-eye-slash" : "fa fa-eye"}
								aria-hidden="true"
								onClick={this.toggleShow}
							></i>
						</span>
						<br />
						{password2}
						<br />
						<button type="submit" value="submit">
							{this.props.formType}
						</button>
						<br />
						{demo}
						{this.renderErrors()}
					</form>
				</div>
			</div>
		);
	}
}

export default SessionForm;
