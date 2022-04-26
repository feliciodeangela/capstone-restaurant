import React from "react";
import HomePage from '../images/complete.jpg';
import '../App.css';

export default function Home() {
	return(
		<>
			<h1>Home</h1>
			<div className="homeMatt">
				<h2>If you are looking for quality fast food at great prices without leaving your home, you came to the right place!</h2>
				<img src={HomePage} alt='Home'></img>
			</div>
		</>
	);
}