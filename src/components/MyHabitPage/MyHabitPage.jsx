import React from "react";
import "./MyHabitPage.css";
import ArchiveBox from "@mui/icons-material/Inventory2Outlined";
import Edit from "@mui/icons-material/EditOutlined";
import Delete from "@mui/icons-material/DeleteOutlineOutlined";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const MyHabitPage = () => {
	const { currentHabit } = useSelector((state) => state.habits);

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
						<div className='MyHabit-form-fields-headings'>Title</div>
						<input
							placeholder='Habit Title'
							type='text'
							className='MyHabit-form-dropdown'
							defaultValue={currentHabit.name}
							readOnly></input>
					</div>
					<div className='MyHabit-form-fields'>
						<div className='MyHabit-form-fields-headings'>Start Date</div>
						<input
							type='text'
							className='MyHabit-form-dropdown'
							defaultValue={currentHabit.startDate}
							readOnly></input>
					</div>
					<div className='MyHabit-form-fields'>
						<div className='MyHabit-form-fields-headings'>End Date</div>
						<input
							type='text'
							className='MyHabit-form-dropdown'
							defaultValue={currentHabit.endDate}
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
								defaultValue={currentHabit.goal}
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
								defaultValue={currentHabit.repeat}
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
								defaultValue={currentHabit.color}
								readOnly></input>
						</div>
					</div>
					<div className='MyHabit-form-fields'>
						<div className='MyHabit-form-fields-headings'>Status</div>
						<div>
							<input
								name='Status'
								className='MyHabit-form-dropdown'
								defaultValue={currentHabit.status}
								readOnly></input>
						</div>
					</div>
					<div className='MyHabit-form-fields'>
						{" "}
						<div className='MyHabit-form-fields-headings'>Labels</div>
						<div className='MyHabit-labels'>
							{currentHabit.labelOne && (
								<label>
									<input type='checkbox' defaultChecked disabled></input> Label
									1
								</label>
							)}
							{currentHabit.labelTwo && (
								<label>
									<input type='checkbox' defaultChecked disabled></input> Label
									2
								</label>
							)}
							{currentHabit.labelThree && (
								<label>
									<input type='checkbox' defaultChecked disabled></input> Label
									3
								</label>
							)}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};
