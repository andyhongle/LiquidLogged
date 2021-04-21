import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			signupModal: false,
			loginModal: false,
		};

		this.logoutUser = this.logoutUser.bind(this);
		this.getLinks = this.getLinks.bind(this);
		this.getSideLinks = this.getSideLinks.bind(this);

		this.handleClick = this.handleClick.bind(this);
		// this.openSignupModal = this.openSignupModal.bind(this);
		// this.closeSignupModal = this.closeSignupModal.bind(this);
		// this.openLoginModal = this.openLoginModal.bind(this);
		// this.closeLoginModal = this.closeLoginModal.bind(this);
		this.closeMobileMenu = this.closeMobileMenu.bind(this);
	}

	// openSignupModal = () => {
	// 	this.setState({ signupModal: true });
	// };

	// openLoginModal = () => {
	// 	this.setState({ loginModal: true });
	// };

	// closeSignupModal = () => {
	// 	this.setState({ signupModal: false });
	// };

	// closeLoginModal = () => {
	// 	this.setState({ loginModal: false });
	// };

	logoutUser(e) {
		e.preventDefault();
		this.props.logout();
	}

	handleClick(e) {
		e.preventDefault();
		this.setState({ clicked: !this.state.clicked });
	}

	closeMobileMenu(e) {
		e.preventDefault();
		this.setState({ button: false });
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
						<li className="header-item">
							<Link to="/" className="header-links" onClick={this.handleClick}>
								Meet the Team
							</Link>
						</li>
						<li className="header-item" onClick={this.handleClick}>
							<Link to="/signup" className="header-links">
								Sign Up
							</Link>
						</li>
						<li className="header-item" onClick={this.handleClick}>
							<Link to="/login" className="header-links">
								Log In
							</Link>
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
						<li className="header-item">
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
					<button className="logout-btn" onClick={this.logoutUser}>
						Log out
					</button>
				</div>
			);
		} else {
			return (
				<div className="header-right">
					<Link to={"/signup"}>
						<button className="session-btn">Sign up</button>
					</Link>

					<Link to={"/login"}>
						<button className="session-btn">Log in</button>
					</Link>
				</div>
			);
		}
	}

	render() {
		return (
			<>
				<nav className="header">
					<Link to="/" className="header-logo" onClick={this.closeMobileMenu}>
						LiquidTracker
					</Link>

					{this.getSideLinks()}
					{this.getLinks()}
				</nav>
			</>
		);
	}
}

export default Header;
