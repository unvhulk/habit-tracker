import React from "react";
import "./MyHabitPage.css";
import ArchiveBox from "@mui/icons-material/Inventory2Outlined";
import Edit from "@mui/icons-material/EditOutlined";
import Delete from "@mui/icons-material/DeleteOutlineOutlined";
import { Link } from "react-router-dom";

export const MyHabitPage = () => {
	return (
		<main className='MyHabit-right-container'>
			<div className='MyHabit-right-form'>
				<div className='MyHabit-right-form-container'>
					<div className='MyHabit-form-heading'>
						<div>{"My Habit"}</div>
						<div>
							<Link to=''>
								<ArchiveBox />
							</Link>
							<Link to='../edit'>
								<Edit />
							</Link>
							<Link to=''>
								<Delete />
							</Link>
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
	);
};
