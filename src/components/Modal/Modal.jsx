import { useDispatch, useSelector } from "react-redux";
import { createHabit } from "reducers/habitSlice";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import "./Modal.css";

export const Modal = ({ onClose }) => {
	const dispatch = useDispatch();
	const [habit, setHabit] = useState({ labels: [] });
	const [formErrors, setFormErrors] = useState({});
	const { labels } = useSelector((state) => state.habits);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setHabit({ ...habit, [name]: value });
	};

	const handleLabel = (e) => {
		const { name, value } = e.target;
		if (value === "on") {
			// setHabit({ ...habit, labels: habit.labels.concat({ [name]: value }) });
			setHabit({ ...habit, labels: { ...habit.labels, [name]: value } });
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let vali = validate(habit);
		setFormErrors(vali);
		console.log(habit);
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
		if (!values.labels.length) {
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
							{labels?.map((label) => (
								<label key={labels.indexOf(label)}>
									<input
										type='checkbox'
										name={label}
										onChange={handleLabel}></input>
									{label}
								</label>
							))}

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
