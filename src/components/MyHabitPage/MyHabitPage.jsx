import React from "react";
import "./MyHabitPage.css";
import Pomodoro from "@mui/icons-material/AccessTimeOutlined";
import ArchiveBox from "@mui/icons-material/Inventory2Outlined";
import Edit from "@mui/icons-material/EditOutlined";
import Delete from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addToArchive, deleteHabit } from "reducers/habitSlice";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const MyHabitPage = () => {
	const { currentHabit } = useSelector((state) => state.habits);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	return location.pathname !== "/home/habit" ? (
		<Outlet />
	) : (
		<main className='MyHabit-right-container'>
			<div className='MyHabit-right-form'>
				<div className='MyHabit-right-form-container'>
					<div className='MyHabit-form-heading'>
						<div>{"My Habit"}</div>

						<div>
							<div
								className='Link-hover'
								onClick={() => {
									navigate("./pomodoro");
								}}>
								<Pomodoro />
							</div>

							<div
								className='Link-hover'
								onClick={() => {
									dispatch(addToArchive(currentHabit));
									navigate("/archive");
								}}>
								<ArchiveBox />
							</div>
							<div className='Link-hover' onClick={() => navigate("../edit")}>
								<Edit />
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
						<div className='MyHabit-form-fields-headings'>Title</div>
						<input
							placeholder='Habit Title'
							type='text'
							className='MyHabit-form-dropdown'
							defaultValue={currentHabit?.name}
							readOnly></input>
					</div>
					<div className='MyHabit-form-fields'>
						<div className='MyHabit-form-fields-headings'>Start Date</div>
						<input
							type='text'
							className='MyHabit-form-dropdown'
							defaultValue={currentHabit?.startDate}
							readOnly></input>
					</div>
					<div className='MyHabit-form-fields'>
						<div className='MyHabit-form-fields-headings'>End Date</div>
						<input
							type='text'
							className='MyHabit-form-dropdown'
							defaultValue={currentHabit?.endDate}
							readOnly></input>
					</div>
					<div className='MyHabit-form-fields'>
						{" "}
						<div className='MyHabit-form-fields-headings'>Goal</div>
						<div>
							<input
								name='Goal'
								className='MyHabit-form-dropdown'
								type='text'
								defaultValue={currentHabit?.goal}
								readOnly></input>
						</div>
					</div>
					<div className='MyHabit-form-fields'>
						<div className='MyHabit-form-fields-headings'>Repeat</div>
						<div>
							<input
								name='Repeat'
								className='MyHabit-form-dropdown'
								type='text'
								defaultValue={currentHabit?.repeat}
								readOnly></input>
						</div>
					</div>
					<div className='MyHabit-form-fields'>
						<div className='MyHabit-form-fields-headings'>Colour</div>
						<div>
							<input
								name='Colour'
								className='MyHabit-form-dropdown'
								type='text'
								defaultValue={currentHabit?.color}
								readOnly></input>
						</div>
					</div>
					<div className='MyHabit-form-fields'>
						<div className='MyHabit-form-fields-headings'>Status</div>
						<div>
							<input
								name='Status'
								className='MyHabit-form-dropdown'
								defaultValue={currentHabit?.status}
								readOnly></input>
						</div>
					</div>
					<div className='MyHabit-form-fields'>
						<div className='MyHabit-form-fields-headings'>Labels</div>
						<div className='MyHabit-labels'>
							{currentHabit?.labels.map((label) => (
								<label key={label}>
									<input type='checkbox' defaultChecked disabled></input>
									{label}
								</label>
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};
