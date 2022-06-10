import React from "react";
import "./Homepage.css";
import home from "assets/Home.png";
import label from "assets/Label.png";
import archive from "assets/Archive.png";
import trash from "assets/Trash.png";
import downArrow from "assets/DownArrow.png";
import profilePic from "assets/Profile Pic.png";
import logout from "assets/Logout.png";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
	let nav = useNavigate();
	return (
		<div className='Home-container'>
			<div className='Home-navbar'>
				<h1>
					<span>My</span>Website
				</h1>
			</div>
			<div className='Home-main'>
				<aside className='Home-left-container'>
					<div className='Home-left-top'>
						<div className='Active-aside'>
							<img src={home} alt='' />
							{/* <FontAwesomeIcon icon='fa-solid fa-coffee' size='lg' /> */}
							Home
						</div>
						<div>
							<img src={label} alt='' /> Labels
						</div>
						<div>
							<img src={archive} alt='' />
							Archive
						</div>
						<div>
							<img src={trash} alt='' />
							Trash
						</div>
					</div>
					<div className='Home-left-bottom'>
						<div>
							<img src={profilePic} alt='' />
						</div>
						<div>
							<div>Tanay Pratap</div>
							<div onClick={() => nav("./habit", { replace: true })}>
								View Profile
							</div>
						</div>

						<div>
							<img src={logout} alt='' />
						</div>
					</div>
				</aside>
				<main className='Home-right-container'>
					<div className='Home-right-profile'>
						<div className='Home-right-profile-heading'>
							<div className='Cards-heading-font'>{"Welcome, Tanay 👋"}</div>
							<div>
								{"Today "}
								<img src={downArrow} alt='' />
							</div>
						</div>
						<div className='Home-right-profile-cards'>
							<div>
								<div className='Cards-heading'>Completed</div>
								<div className='Cards-count'>4</div>
								<div className='Cards-subheading'>Total count</div>
							</div>
							<div>
								<div className='Cards-heading'>In progress</div>
								<div className='Cards-count'>2</div>
								<div className='Cards-subheading'>Total Count</div>
							</div>
							<div>
								<div className='Cards-heading'>Overdue</div>
								<div className='Cards-count'>10</div>
								<div className='Cards-subheading'>Total Count</div>
							</div>
							<div>
								<div className='Cards-heading'>Total</div>
								<div className='Cards-count'>16</div>
								<div className='Cards-subheading'>Total Count</div>
							</div>
						</div>
					</div>
					<div className='Home-right-habits'>
						<div className='Home-right-habits-heading'>
							<div className='Cards-heading-font'>My Habits 🎯</div>
							<div>+ Create Habit</div>
						</div>
						<div className='Home-right-habits-active'>
							<div>ACTIVE</div>
							<div>
								<div>
									<div className='Cards-heading'>Task #1</div>
									<div className='Cards-label'>
										<div>label</div>
										<div>label</div>
										<div>label</div>
									</div>
									<div className='Cards-subheading'>0/2 times today</div>
								</div>
								<div>
									<div className='Cards-heading'>Task #2</div>
									<div className='Cards-label'>
										<div>label</div>
										<div>label</div>
										<div>label</div>
									</div>
									<div className='Cards-subheading'>0/2 times today</div>
								</div>
								<div>
									<div className='Cards-heading'>Task #3</div>
									<div className='Cards-label'>
										<div>label</div>
										<div>label</div>
										<div>label</div>
									</div>
									<div className='Cards-subheading'>0/2 times today</div>
								</div>
								<div>
									<div className='Cards-heading'>Task #4</div>
									<div className='Cards-label'>
										<div>label</div>
										<div>label</div>
										<div>label</div>
									</div>
									<div className='Cards-subheading'>0/2 times today</div>
								</div>
							</div>
						</div>
						<div className='Home-right-habits-completed'>
							<div>COMPLETE</div>
							<div className='Home-right-habits-completed-tasks'>
								<div>
									<div className='Cards-heading'>Task #12</div>
									<div className='Cards-label'>
										<div>label</div>
										<div>label</div>
										<div>label</div>
									</div>
									<div className='Cards-subheading'>2/2 times today</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};
