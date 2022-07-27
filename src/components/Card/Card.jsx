import { useDispatch } from "react-redux";
import { getHabit } from "reducers/habitSlice";
import { useNavigate } from "react-router-dom";

import "./Card.css";

export const Card = ({ habit }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	let cards = document.getElementsByName(habit.color);
	cards.forEach((card) => {
		card.classList.add(habit.color);
	});

	return (
		<div
			name={habit.color}
			className='CardContainer'
			onClick={async () => {
				await dispatch(getHabit(habit._id));
				navigate("./habit");
			}}>
			<div className='Cards-heading'>
				<div>{habit.name}</div>
			</div>
			<div className='Cards-label'>
				{habit.labelOne && <div>Label1</div>}
				{habit.labelTwo && <div>Label2</div>}
				{habit.labelThree && <div>Label3</div>}
			</div>
			<div className='Cards-subheading'>{habit.goal + " " + habit.repeat}</div>
		</div>
	);
};
