import { useState } from "react";
import { useAuth } from "contexts/auth-context";
import "./Login.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
export const Login = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const { loginHandler } = useAuth();
	const location = useLocation();

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [formErrors, setFormErrors] = useState({});
	const { error, setError } = useAuth();

	// Handling input
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	//Guest user handler
	const guestUserHandler = (e) => {
		e.preventDefault();
		setUser({
			email: "adarshbalak@gmail.com",
			password: "adarshBalak123",
		});
	};

	// Validate the form values
	const validate = (values) => {
		const errors = {};
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.email) {
			errors.email = "Email is required";
		} else if (!emailRegex.test(values.email)) {
			errors.email = "This is not a valid Email format ";
		}
		if (!values.password) {
			errors.password = "Password is required";
		}
		return errors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let vali = validate(user);
		setFormErrors(vali);
		if (Object.keys(vali).length === 0) {
			loginHandler(user);
		}
	};

	useEffect(() => {
		setError("");
	}, [user.email, user.password, location.pathname]);

	return (
		<div className='Login-container'>
			<div className='Login-form'>
				<div>
					<h1>
						<span>Log</span>In
					</h1>
				</div>
				<p className='error-msg'>{error?.[0]}</p>
				<form>
					{/* Labels and inputs for form data */}
					<label className='label'>Email</label>
					<input
						name='email'
						onChange={handleChange}
						className='input'
						value={user.email}
						type='email'
						required
					/>
					<p className='error-msg'>{formErrors?.email}</p>

					<label className='label'>Password</label>
					<input
						name='password'
						onChange={handleChange}
						className='input'
						value={user.password}
						type='password'
						required
					/>

					<p className='error-msg'>{formErrors?.password}</p>
					<p className='bottom-label'>
						Don't have an account? <Link to='/signup'>Sign up</Link>
					</p>
					<p className='bottom-label guest-user' onClick={guestUserHandler}>
						Guest user account
					</p>

					<button onClick={handleSubmit} className='btn' type='submit'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
