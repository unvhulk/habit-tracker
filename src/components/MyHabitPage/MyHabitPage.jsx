import React from "react";
import "./MyHabitPage.css";
import home from "assets/Home.png";
import label from "assets/LabelSelect.png";
import archive from "assets/Archive.png";
import trash from "assets/Trash.png";
import achiveBox from "assets/ArchiveBox.png";
import edit from "assets/Edit.png";
import deleteLogo from "assets/Delete.png";
// import dropdown from "assets/Dropdown.png";

// import downArrow from "assets/DownArrow.png";
import profilePic from "assets/Profile Pic.png";
import logout from "assets/Logout.png";

export const MyHabitPage = () => {
	return (
		<div className='MyHabit-container'>
			<div className='MyHabit-navbar'>
				<h1>
					<span>My</span>Website
				</h1>
			</div>
			<div className='MyHabit-main'>
				<aside className='MyHabit-left-container'>
					<div className='MyHabit-left-top'>
						<div>
							<img src={home} alt='' /> Home
						</div>
						<div className='Active-aside'>
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
						<div>Create New Note</div>
					</div>
					<div className='MyHabit-left-bottom'>
						<div>
							<img src={profilePic} alt='' />
						</div>
						<div>
							<div>Tanay Pratap</div>
							<div>View Profile</div>
						</div>

						<div>
							<img src={logout} alt='' />
						</div>
					</div>
				</aside>
				<main className='MyHabit-right-container'>
					<div className='MyHabit-right-form'>
						<div className='MyHabit-right-form-container'>
							<div className='MyHabit-form-heading'>
								<div>{"My Habit"}</div>
								<div>
									<img src={achiveBox} alt='' />
									<img src={edit} alt='' />
									<img src={deleteLogo} alt='' />
								</div>
							</div>
							<div className='MyHabit-form-fields'>
								{" "}
								<div className='MyHabit-form-fields-headings'>Title</div>
								<input placeholder='Habit Title' type='text'></input>
							</div>
							<div className='MyHabit-form-fields'>
								<div className='MyHabit-form-fields-headings'>Start Date</div>
								<input placeholder='26/05/2022' type='date'></input>
								<div></div>
							</div>
							<div className='MyHabit-form-fields'>
								<div className='MyHabit-form-fields-headings'>End Date</div>
								<input placeholder='26/05/2022' type='date'></input>
								<div></div>
							</div>
							<div className='MyHabit-form-fields'>
								{" "}
								<div className='MyHabit-form-fields-headings'>Goal</div>
								<div>
									<select name='Goal' className='MyHabit-form-dropdown'>
										<option value='1 Times'>1 Times</option>
										<option value='2 Times'>2 Times</option>
										<option value='3 Times'>3 Times</option>
										<option value='4 Times'>4 Times</option>
									</select>
								</div>
							</div>
							<div className='MyHabit-form-fields'>
								<div className='MyHabit-form-fields-headings'>Repeat</div>
								<div>
									<select name='Repeat' className='MyHabit-form-dropdown'>
										<option value='Daily'>Daily</option>
										<option value='Weekly'>Weekly</option>
										<option value='Monthly'>Monthly</option>
										<option value='Anually'>Anually</option>
										<option value='Never'>Never</option>
									</select>
								</div>
							</div>
							<div className='MyHabit-form-fields'>
								<div className='MyHabit-form-fields-headings'>Colour</div>
								<div>
									<select name='Colour' className='MyHabit-form-dropdown'>
										<option value='Low'>Low</option>
										<option value='Medium'>Medium</option>
										<option value='Bright'>Bright</option>
										<option value='Green'>Green</option>
									</select>
								</div>
							</div>
							<div className='MyHabit-form-fields'>
								<div className='MyHabit-form-fields-headings'>Status</div>
								<div>
									<select name='Status' className='MyHabit-form-dropdown'>
										<option value='Active'> Active</option>
										<option value='Inactive'>Inactive</option>
										<option value='Suspended'>Suspended</option>
									</select>
								</div>
							</div>
							<div className='MyHabit-form-fields'>
								{" "}
								<div className='MyHabit-form-fields-headings'>Labels</div>
								<div className='MyHabit-labels'>
									<label>
										<input type='checkbox'></input> Label 1
									</label>
									<label>
										<input type='checkbox'></input> Label 2
									</label>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};
