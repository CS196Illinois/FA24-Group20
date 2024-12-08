import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/Compare'>Compare</NavLink>
				</li>
				<li>
					<NavLink to='/About'>About</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
