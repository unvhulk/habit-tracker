import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import profilePic from "assets/Profile Pic.png";
import Logout from "@mui/icons-material/LogoutOutlined";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "contexts/auth-context";
export const Sidebar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { logoutHandler, user } = useAuth();

	return (
		<aside className='Home-left-container'>
			<div className='Home-left-top'>
				{SidebarData.map((val, key) => {
					//Regex to match all the sub-routes in a Route.
					let regex = new RegExp(val.link + "/?.*", "g");
					return (
						<div
							key={key}
							onClick={() => navigate(`${val.link}`)}
							id={location.pathname.match(regex) ? "Active" : ""}>
							{val.icon}
							{val.title}
						</div>
					);
				})}
			</div>
			<div className='Home-left-bottom'>
				<div>
					<img src={profilePic} alt='' />
				</div>
				<div>
					<div>{user.firstname + " " + user.lastname}</div>
					<div onClick={() => navigate("/habit")}>View Profile</div>
				</div>

				<div onClick={() => logoutHandler()} style={{ cursor: "pointer" }}>
					<Logout />
				</div>
			</div>
		</aside>
	);
};
