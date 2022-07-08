import React, { useState } from "react";
import "./Homepage.css";
import ArrowDown from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "contexts/auth-context";
import { Modal } from "components";

export const Homepage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { user } = useAuth();
	const [modal, setModal] = useState(false);
	return location.pathname !== "/home" ? (
		<Outlet />
	) : (
		<>
			<main className='Home-right-container'>
				<div className='Home-right-profile'>
					<div className='Home-right-profile-heading'>
						<div className='Cards-heading-font'>{`Welcome, ${user.firstname} 👋`}</div>
						<div>
							{"Today "}
							<ArrowDown />
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
						<div onClick={() => setModal(true)}>+ Create Habit</div>
						<Modal open={modal} onClose={() => setModal(false)}>
							This is a test modal
						</Modal>
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
		</>
	);
};
