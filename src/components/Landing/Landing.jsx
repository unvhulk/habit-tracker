import React from "react";
import "./Landing.css";
import logo from "assets/landing.png";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
	let nav = useNavigate();
	return (
		<div className='Landing-container'>
			<div className='Landing-left'>
				<div className='Landing-left-container'>
					<div className='Landing-heading-container'>
						<h1>
							<span>My</span>Website
						</h1>
					</div>
					<div className='Landing-middle-container'>
						<div className='L-h2-container'>
							<h2>Meet your modern</h2>
							<h2 style={{ color: "#5348c7" }}>Habit Tracker App</h2>
						</div>
						<p>
							Manage your daily tasks and workflow in a<br /> modern way and
							boost your efficiency
							<br /> without any efforts.
						</p>
					</div>
					<div className='Landing-btn-container'>
						<div className='Landing-btn' onClick={() => nav("./home")}>
							Join now
						</div>
						<p>Already have an account?</p>
					</div>
				</div>
			</div>
			<div className='Landing-right'>
				<div className='Landing-img-container	'>
					<img src={logo} alt=''></img>
				</div>
			</div>
		</div>
	);
};
