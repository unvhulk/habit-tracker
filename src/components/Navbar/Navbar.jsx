import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();
	return (
		<div className='Home-navbar'>
			<h1 onClick={() => navigate("/")}>
				<span>My</span>Website
			</h1>
		</div>
	);
};
