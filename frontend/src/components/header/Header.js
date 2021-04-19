import React, { useState, useEffect } from "react";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);

	return (
		<>
			<nav className="header">
				<div className="header-container">
					<Link to="/" className="header-logo" onClick={closeMobileMenu}>
						LiquidTracker
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>
					<ul className={click ? "header-menu active" : "header-menu"}>
						<li className="header-item">
							<Link
								to="/"
								className="header-links-mobile"
								onClick={closeMobileMenu}
							>
								Meet the Team
							</Link>
						</li>
						<li className="header-item">
							<Link
								to="/signup"
								className="header-links-mobile"
								onClick={closeMobileMenu}
							>
								Sign Up
							</Link>
						</li>
						<li className="header-item">
							<Link
								to="/login"
								className="header-links-mobile"
								onClick={closeMobileMenu}
							>
								Log In
							</Link>
						</li>
					</ul>

					<Link to="/signup" className="btn-mobile">
						{button && <Button buttonStyle="btn--outline">Sign Up</Button>}
					</Link>

					<Link to="/login" className="btn-mobile">
						{button && <Button buttonStyle="btn--outline">Log In</Button>}
					</Link>
				</div>
			</nav>
		</>
	);
}

export default Header;
