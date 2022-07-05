import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const navigate = useNavigate();
	const userDetails = JSON.parse(localStorage.getItem("user"));
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [user, setUser] = useState(userDetails);
	const [error, setError] = useState({});

	const loginAPI = (user) => {
		return axios.post("/api/auth/login", user);
	};

	const signupAPI = (user) => {
		return axios.post("/api/auth/signup", user);
	};

	const loginHandler = async (user) => {
		console.log("entered login");
		try {
			const response = await loginAPI(user);
			if (response.status === 200) {
				localStorage.setItem("token", response.data.encodedToken);
				localStorage.setItem("user", JSON.stringify(response.data.foundUser));
				setToken(response.data.encodedToken);
				setUser(response.data.foundUser);
				console.log("in login handler");
				navigate("/home");
			}
		} catch (err) {
			console.log(err);
			setError(err.response.data.errors);
		}
	};

	const signupHandler = async (user) => {
		console.log("entered signup");
		try {
			const response = await signupAPI(user);
			if (response.status === 201) {
				localStorage.setItem("token", response.data.encodedToken);
				localStorage.setItem("user", JSON.stringify(response.data.createdUser));
				setToken(response.data.encodedToken);
				setUser(response.data.createdUser);
				navigate("/home");
			}
		} catch (err) {
			setError(err.response.data.errors);
			console.log(err);
		}
	};

	const logoutHandler = () => {
		navigate("/");
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		setToken(null);
		setUser(null);
		setError({});
	};

	return (
		<AuthContext.Provider
			value={{
				token,
				user,
				loginHandler,
				signupHandler,
				logoutHandler,
				error,
				setError,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
