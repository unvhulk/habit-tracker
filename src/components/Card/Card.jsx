import { useDispatch } from "react-redux";
import {
	getHabit,
	restoreFromArchive,
	deleteFromArchive,
} from "reducers/habitSlice";
import { useLocation, useNavigate } from "react-router-dom";
import Delete from "@mui/icons-material/DeleteOutlineOutlined";
import Restore from "@mui/icons-material/SettingsBackupRestoreOutlined";

import "./Card.css";

export const Card = ({ habit }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	return (
		<>
			<div
				key={habit?._id}
				className={`Card-Container ${habit?.color}`}
				onClick={async () => {
					if (location.pathname === "/home") {
						await dispatch(getHabit(habit?._id));
						navigate("./habit", { state: location });
					}
				}}>
				<div className='Cards-heading' key={habit?._id}>
					<div>{habit?.name}</div>
				</div>
				<div className='Cards-label'>
					{habit?.labels.map((label) => (
						<div key={label}> {label}</div>
					))}
				</div>
				<div className='Cards-subheading'>
					{habit?.goal + " " + habit?.repeat}
					{location.pathname === "/archive" && (
						<>
							<div
								className='Archive-btn'
								onClick={() => dispatch(restoreFromArchive(habit))}>
								<Restore />
							</div>
							<div
								className='Archive-btn'
								onClick={() => dispatch(deleteFromArchive(habit))}>
								<Delete />
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};
