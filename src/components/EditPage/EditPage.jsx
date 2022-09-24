import React, { useState } from "react";
import "./EditPage.css";
import ArchiveBox from "@mui/icons-material/Inventory2Outlined";
import Delete from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { postHabit, addToArchive, deleteHabit } from "reducers/habitSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const EditPage = () => {
	const [formErrors, setFormErrors] = useState({});
	const [habit, setHabit] = useState({
		name: "",
		startDate: "",
		endDate: "",
		goal: "",
		repeat: "",
		color: "",
		status: "",
		labels: {},
	});
	const { currentHabit, labels } = useSelector((state) => state.habits);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		setHabit(currentHabit);
	}, []);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setHabit({ ...habit, [name]: value });
	};

	const handleLabel = async (e) => {
		const { name, checked } = e.target;
		let labels = { ...habit.labels };
		if (!checked) {
			delete labels[name];
		} else {
			labels[name] = true;
		}
		setHabit({ ...habit, labels: labels });
	};

	const checkedLabel = (label) => {
		return habit?.labels[label];
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let vali = validate(habit);
		setFormErrors(vali);
		if (Object.keys(vali).length === 0) {
			dispatch(postHabit(habit));
			return true;
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
		if (!Object.keys(values.labels)) {
			errors.label = "Habit Label is required";
		}
		return errors;
	};
	return (
		<form
			className='EditPage-right-container'
			onSubmit={(e) => {
				let res = handleSubmit(e);
				if (res) navigate("/home");
			}}>
			<div className='EditPage-right-form'>
				<div className='MyHabit-right-form-container'>
					<div className='MyHabit-form-heading'>
						<div>{"Edit Habit"}</div>
						<div>
							<div></div>
							<div
								className='Link-hover'
								onClick={() => {
									dispatch(addToArchive(currentHabit));
									navigate("/archive");
								}}>
								<ArchiveBox />
							</div>

							<div
								className='Link-hover'
								onClick={() => {
									dispatch(deleteHabit(currentHabit));
									navigate("/trash");
								}}>
								<Delete />
							</div>
						</div>
					</div>
					<div className='MyHabit-form-fields'>
						{" "}
						<div className='MyHabit-form-fields-headings'>Title</div>
						<input
							placeholder='Habit Title'
							type='text'
							name='name'
							value={habit?.name}
							onChange={handleChange}></input>
						<p className='error-msg'>{formErrors?.name}</p>
					</div>
					<div className='MyHabit-form-fields'>
						<div className='MyHabit-form-fields-headings'>Start Date</div>
						<input
							placeholder='26/05/2022'
							type='date'
							name='startDate'
							value={habit?.startDate}
							onChange={handleChange}></input>
						<p className='error-msg'>{formErrors?.startDate}</p>
					</div>
					<div className='MyHabit-form-fields'>
						<div className='MyHabit-form-fields-headings'>End Date</div>
						<input
							placeholder='26/05/2022'
							type='date'
							name='endDate'
							value={habit?.endDate}
							onChange={handleChange}></input>
						<p className='error-msg'>{formErrors?.endDate}</p>
					</div>
					<div className='MyHabit-form-fields'>
						{" "}
						<div className='MyHabit-form-fields-headings'>Goal</div>
						<div>
							<select
								name='goal'
								className='MyHabit-form-dropdown'
								value={habit?.goal}
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
					<div className='MyHabit-form-fields'>
						<div className='MyHabit-form-fields-headings'>Repeat</div>
						<div>
							<select
								name='repeat'
								className='MyHabit-form-dropdown'
								value={habit?.repeat}
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
					<div className='MyHabit-form-fields'>
						<div className='MyHabit-form-fields-headings'>Colour</div>
						<div>
							<select
								name='color'
								className='MyHabit-form-dropdown'
								value={habit?.color}
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
					<div className='MyHabit-form-fields'>
						<div className='MyHabit-form-fields-headings'>Status</div>
						<div>
							<select
								name='status'
								className='MyHabit-form-dropdown'
								value={habit?.status}
								onChange={handleChange}>
								<option value=''>--Select Status--</option>
								<option value='Active'>Active</option>
								<option value='Inactive'>Inactive</option>
								<option value='Complete'>Complete</option>
							</select>
							<p className='error-msg'>{formErrors?.status}</p>
						</div>
					</div>
					<div className='MyHabit-form-fields'>
						<div className='MyHabit-form-fields-headings'>Labels</div>
						<div className='EditPage-labels'>
							{labels?.map((label) => (
								<label key={label}>
									<input
										type='checkbox'
										name={label}
										checked={checkedLabel(label)}
										onChange={handleLabel}
									/>
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
			</div>
		</form>
	);
};
