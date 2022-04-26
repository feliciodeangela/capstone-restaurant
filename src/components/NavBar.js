import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
	return(
		<div className='nav-bar'>
			<div className="logo">
				<h1>FastBay</h1>
			</div>
			<ul className="menu">
				<li><Link to={'/'}>Home</Link></li>
				<li><Link to={'/About'}>About</Link></li>
				<li><Link to={'/Contact'}>Contact</Link></li>
				<li><Link to={'/Products'}>Products</Link></li>
			</ul>
		</div>
	);
}