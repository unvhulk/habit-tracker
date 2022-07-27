import { useState } from "react";
import "./Modal.css";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { createHabit } from "reducers/habitSlice";

export const Modal = ({ onClose }) => {
	const dispatch = useDispatch();
	const [habit, setHabit] = useState({});
	const [formErrors, setFormErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setHabit({ ...habit, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let vali = validate(habit);
		setFormErrors(vali);
		if (Object.keys(vali).length === 0) {
			dispatch(createHabit(habit));
			onClose();
		}
	};

	const validate = (values) => {
		const errors = {};
		if (!values.name) {
			errors.name = "Habit name is required";
		}
		if (!values.startDate) {
			errors.startDate = "Habit's Start date is required";
		}
		if (!values.endDate) {
			errors.endDate = "Habit's End date is required";
		}
		if (!values.goal) {
			errors.goal = "Habit's Goal is required";
		}
		if (!values.color) {
			errors.color = "Habit Card Color is required";
		}
		if (!values.status) {
			errors.status = "Habit Status is required";
		}
		if (!values.repeat) {
			errors.repeat = "Habit's Repition is required";
		}
		if (!(values.labelOne || values.labelTwo || values.labelThree)) {
			errors.label = "Habit Label is required";
		}
		return errors;
	};

	return (
		<>
			<div className='Overlay' />
			<form className='Modal' onSubmit={handleSubmit}>
				<div className='Modal-form-container'>
					<div className='Modal-form-heading'>
						<div>{"New Habit"}</div>
						<div>
							<CloseIcon onClick={onClose} />
						</div>
						<div
							style={{
								margin: "0",
								padding: "0",
								borderTop: "2px solid black ",
								width: "7rem",
							}}></div>
					</div>
					<div className='Modal-form-fields'>
						<div className='Modal-form-fields-headings'>Title</div>
						<input
							placeholder='Enter name of your habit'
							type='text'
							name='name'
							className='Modal-form-input'
							onChange={handleChange}></input>
						<p className='error-msg'>{formErrors?.name}</p>
					</div>
					<div className='Modal-form-fields'>
						<div className='Modal-form-fields-headings'>Start Date</div>
						<input type='date' name='startDate' onChange={handleChange}></input>
						<p className='error-msg'>{formErrors?.startDate}</p>
					</div>
					<div className='Modal-form-fields'>
						<div className='Modal-form-fields-headings'>End Date</div>
						<input type='date' name='endDate' onChange={handleChange}></input>
						<p className='error-msg'>{formErrors?.endDate}</p>
					</div>
					<div className='Modal-form-fields'>
						{" "}
						<div className='Modal-form-fields-headings'>Goal</div>
						<div>
							<select
								name='goal'
								className='Modal-form-dropdown'
								onChange={handleChange}>
								<option value=''>--Select Goal--</option>
								<option value='1 Time'>1 Time</option>
								<option value='2 Times'>2 Times</option>
								<option value='3 Times'>3 Times</option>
								<option value='4 Times'>4 Times</option>
							</select>
							<p className='error-msg'>{formErrors?.goal}</p>
						</div>
					</div>
					<div className='Modal-form-fields'>
						<div className='Modal-form-fields-headings'>Repeat</div>
						<div>
							<select
								name='repeat'
								className='Modal-form-dropdown'
								onChange={handleChange}>
								<option value=''>--Select Repetition--</option>
								<option value='Daily'>Daily</option>
								<option value='Weekly'>Weekly</option>
								<option value='Monthly'>Monthly</option>
								<option value='Anually'>Anually</option>
								<option value='Never'>Never</option>
							</select>
							<p className='error-msg'>{formErrors?.repeat}</p>
						</div>
					</div>
					<div className='Modal-form-fields'>
						<div className='Modal-form-fields-headings'>Colour</div>
						<div>
							<select
								name='color'
								className='Modal-form-dropdown'
								onChange={handleChange}>
								<option value=''>--Color--</option>
								<option value='Blue'>Blue</option>
								<option value='Yellow'>Yellow</option>
								<option value='Red'>Red</option>
								<option value='Green'>Green</option>
							</select>
							<p className='error-msg'>{formErrors?.color}</p>
						</div>
					</div>
					<div className='Modal-form-fields'>
						<div className='Modal-form-fields-headings'>Status</div>
						<div>
							<select
								name='status'
								className='Modal-form-dropdown'
								onChange={handleChange}>
								<option value=''>--Select Status--</option>
								<option value='Active'>Active</option>
								<option value='Inactive'>Inactive</option>
								<option value='Complete'>Complete</option>
							</select>
							<p className='error-msg'>{formErrors?.status}</p>
						</div>
					</div>
					<div className='Modal-form-fields'>
						<div className='Modal-form-fields-headings'>Labels</div>
						<div className='Modal-labels'>
							<label>
								<input
									type='checkbox'
									name='labelOne'
									onChange={handleChange}></input>
								Label 1
							</label>
							<label>
								<input
									type='checkbox'
									name='labelTwo'
									onChange={handleChange}></input>
								Label 2
							</label>
							<label>
								<input
									type='checkbox'
									name='labelThree'
									onChange={handleChange}></input>
								Label 3
							</label>
							<p className='error-msg'>{formErrors?.label}</p>
						</div>
					</div>
					<div className='Modal-form-button'>
						<button>Done</button>
					</div>
				</div>
			</form>
		</>
	);
};
