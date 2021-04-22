import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
		};

		this.logoutUser = this.logoutUser.bind(this);
		this.getLinks = this.getLinks.bind(this);
		this.getSideLinks = this.getSideLinks.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	logoutUser(e) {
		e.preventDefault();
		this.props.logout();
	}

	handleClick(e) {
		e.preventDefault();
		this.setState({ clicked: !this.state.clicked });
	}

	getSideLinks() {
		if (!this.props.loggedIn) {
			return (
				<div>
					<div className="menu-icon" onClick={this.handleClick}>
						<i
							className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
						/>
					</div>
					<ul
						className={
							this.state.clicked ? "header-menu active" : "header-menu"
						}
					>
						<li className="header-item" onClick={this.handleClick}>
							<div
								onClick={() => this.props.openModal("signup")}
								className="header-links"
							>
								Sign Up
							</div>
						</li>
						<li className="header-item" onClick={this.handleClick}>
							<div
								onClick={() => this.props.openModal("login")}
								className="header-links"
							>
								Log In
							</div>
						</li>
					</ul>
				</div>
			);
		} else {
			return (
				<div>
					<div className="menu-icon" onClick={this.handleClick}>
						<i
							className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
						/>
					</div>
					<ul
						className={
							this.state.clicked ? "header-menu active" : "header-menu"
						}
					>
						<li className="header-item" onClick={this.handleClick}>
							<Link className="header-links" to="/profile">
                                Profile
							</Link>
						</li>
						<li className="header-item" onClick={this.handleClick}>
							<div className="header-links" onClick={this.logoutUser}>
								Log Out
							</div>
						</li>
					</ul>
				</div>
			);
		}
	}

	getLinks() {
		if (this.props.loggedIn) {
			return (
				<div className="header-right">
					<Link className="session-btn" to="/profile">
                        Profile
					</Link>
					<button className="session-btn" onClick={this.logoutUser}>
						Log out
					</button>
				</div>
			);
		} else {
			return (
				<div className="header-right">
					<button
						className="session-btn"
						onClick={() => this.props.openModal("signup")}
					>
						Sign up
					</button>

					<button
						className="session-btn"
						onClick={() => this.props.openModal("login")}
					>
						Log in
					</button>
				</div>
			);
		}
	}

	render() {
		return (
			<>
				<nav className="header">
					<div>
						<Link to="/" className="header-logo" onClick={this.handleClick}>
							Liquid Logged
						</Link>
						<span className="ripple"></span>
					</div>

					{this.getSideLinks()}
					{this.getLinks()}
				</nav>
			</>
		);
	}
}

export default Header;
