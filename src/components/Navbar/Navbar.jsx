import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();
	return (
		<div className='Home-navbar'>
			<h1 onClick={() => navigate("/")}>
				<span>Habit</span>Tracker
			</h1>
		</div>
	);
};
