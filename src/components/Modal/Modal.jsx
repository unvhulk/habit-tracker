import React from "react";
import "./Modal.css";
import CloseIcon from "@mui/icons-material/Close";

export const Modal = ({ open, children, onClose }) => {
	if (!open) return null;
	return (
		<>
			<div className='Overlay' />
			<div className='Modal'>
				<div className='Modal-form-container'>
					<div className='Modal-form-heading'>
						<div>{"New Habit"}</div>
						<div>
							<CloseIcon onClick={onClose} />
						</div>
					</div>
					<div className='Modal-form-fields'>
						{" "}
						<div className='Modal-form-fields-headings'>Title</div>
						<input
							placeholder='Enter name of your habit'
							type='text'
							className='Modal-form-input'></input>
					</div>
					<div className='Modal-form-fields'>
						<div className='Modal-form-fields-headings'>Start Date</div>
						<input type='date'></input>
					</div>
					<div className='Modal-form-fields'>
						<div className='Modal-form-fields-headings'>End Date</div>
						<input type='date'></input>
					</div>
					<div className='Modal-form-fields'>
						{" "}
						<div className='Modal-form-fields-headings'>Goal</div>
						<div>
							<select name='Goal' className='Modal-form-dropdown'>
								<option value='1 Times'>1 Times</option>
								<option value='2 Times'>2 Times</option>
								<option value='3 Times'>3 Times</option>
								<option value='4 Times'>4 Times</option>
							</select>
						</div>
					</div>
					<div className='Modal-form-fields'>
						<div className='Modal-form-fields-headings'>Repeat</div>
						<div>
							<select name='Repeat' className='Modal-form-dropdown'>
								<option value='Daily'>Daily</option>
								<option value='Weekly'>Weekly</option>
								<option value='Monthly'>Monthly</option>
								<option value='Anually'>Anually</option>
								<option value='Never'>Never</option>
							</select>
						</div>
					</div>
					<div className='Modal-form-fields'>
						<div className='Modal-form-fields-headings'>Colour</div>
						<div>
							<select name='Colour' className='Modal-form-dropdown'>
								<option value='Low'>Low</option>
								<option value='Medium'>Medium</option>
								<option value='Bright'>Bright</option>
								<option value='Green'>Green</option>
							</select>
						</div>
					</div>
					<div className='Modal-form-fields'>
						<div className='Modal-form-fields-headings'>Status</div>
						<div>
							<select name='Status' className='Modal-form-dropdown'>
								<option value='Active'> Active</option>
								<option value='Inactive'>Inactive</option>
								<option value='Suspended'>Suspended</option>
							</select>
						</div>
					</div>
					<div className='Modal-form-fields'>
						{" "}
						<div className='Modal-form-fields-headings'>Labels</div>
						<div className='Modal-labels'>
							<label>
								<input type='checkbox'></input> Label 1
							</label>
							<label>
								<input type='checkbox'></input> Label 2
							</label>
							<label>
								<input type='checkbox'></input> Label 3
							</label>
						</div>
					</div>
					<div className='Modal-form-button'>
						<button>Done</button>
					</div>
				</div>
			</div>
		</>
	);
};
