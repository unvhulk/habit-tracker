import React, { useState, useEffect } from "react";
import "./Homepage.css";
import ArrowDown from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Outlet, useLocation } from "react-router-dom";
import { useAuth } from "contexts/auth-context";
import { Modal, Card } from "components";
import { getHabits } from "reducers/habitSlice";
import { useDispatch, useSelector } from "react-redux";

export const Homepage = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const { user, token } = useAuth();
	const { habitsList, status } = useSelector((state) => state.habits);
	const [modal, setModal] = useState(false);
	const [statusList, setStatusList] = useState({
		Active: 0,
		Inactive: 0,
		Complete: 0,
	});

	const habitsListActive = () => {
		return habitsList?.map((habit) => {
			if (habit.status === "Active") {
				return <Card habit={habit} key={habit._id} />;
			} else return null;
		});
	};

	const habitsListComplete = () => {
		return habitsList?.map((habit) => {
			if (habit.status === "Complete") {
				return <Card habit={habit} key={habit._id} />;
			} else return null;
		});
	};

	const statusMGR = (habitsList) => {
		let statusList = {
			Active: 0,
			Inactive: 0,
			Complete: 0,
		};
		habitsList?.forEach((habit) => {
			if (habit.status === "Active") {
				statusList.Active += 1;
			} else if (habit.status === "Inactive") {
				statusList.Inactive = statusList.Inactive + 1;
			} else if (habit.status === "Complete") {
				statusList.Complete = statusList.Complete + 1;
			} else console.error("Unknown value of Status");
		});
		setStatusList(statusList);
	};

	useEffect(() => {
		dispatch(getHabits(token));
	}, []);

	useEffect(() => {
		statusMGR(habitsList);
	}, [habitsList]);

	return location.pathname !== "/home" ? (
		<Outlet />
	) : (
		<>
			<main className='Home-right-container'>
				<div className='Home-right-profile'>
					<div className='Home-right-profile-heading'>
						<div className='Cards-heading-font'>{`Welcome, ${user.firstName} 👋`}</div>
					</div>
					<div className='Home-right-profile-cards'>
						<div>
							<div className='Cards-heading'>Completed</div>
							<div className='Cards-count'>{statusList.Complete}</div>
							<div className='Cards-subheading'>Total count</div>
						</div>
						<div>
							<div className='Cards-heading'>In progress</div>
							<div className='Cards-count'>{statusList.Active}</div>
							<div className='Cards-subheading'>Total Count</div>
						</div>
						<div>
							<div className='Cards-heading'>Overdue</div>
							<div className='Cards-count'>{statusList.Inactive}</div>
							<div className='Cards-subheading'>Total Count</div>
						</div>
						<div>
							<div className='Cards-heading'>Total</div>
							<div className='Cards-count'>
								{statusList.Complete + statusList.Active + statusList.Inactive}
							</div>
							<div className='Cards-subheading'>Total Count</div>
						</div>
					</div>
				</div>
				<div className='Home-right-habits'>
					<div className='Home-right-habits-heading'>
						<div className='Cards-heading-font'>My Habits 🎯</div>
						<div onClick={() => setModal(true)}>+ Create Habit</div>
						{modal && <Modal onClose={() => setModal(false)} />}
					</div>
					<div className='Home-right-habits-active'>
						<div className='Home-right-habits-card-heading'>ACTIVE</div>
						{status === "loading" ? (
							<div>Loading...</div>
						) : (
							<>
								<div className='Home-right-habits-active-cards'>
									{habitsListActive()}
								</div>
							</>
						)}
					</div>
					<div className='Home-right-habits-completed'>
						<div className='Home-right-habits-card-heading'>COMPLETE</div>
						{status === "loading" ? (
							<div>Loading...</div>
						) : (
							<>
								<div className='Home-right-habits-completed-tasks'>
									{habitsListComplete()}
								</div>
							</>
						)}
					</div>
				</div>
			</main>
		</>
	);
};
