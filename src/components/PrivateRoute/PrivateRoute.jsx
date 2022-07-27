import { useAuth } from "contexts/auth-context";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { Navbar, Sidebar } from "components";
export const PrivateRoute = () => {
	const location = useLocation();
	const { token } = useAuth();
	return token ? (
		<div className='Home-container'>
			<Navbar />
			<div className='Home-main'>
				<Sidebar />
				{/* page main container */}
				<Outlet />
			</div>
		</div>
	) : (
		<Navigate to='/login' replace state={{ to: location }} />
	);
};
