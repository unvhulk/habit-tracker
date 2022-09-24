import { useState } from "react";
import { useAuth } from "contexts/auth-context";
import "./Signup.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Signup = () => {
	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const location = useLocation();
	const { signupHandler } = useAuth();

	// States for checking the errors
	const [formErrors, setFormErrors] = useState({});
	const { error, setError } = useAuth();

	// Handling input
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		let vali = validate(user);
		setFormErrors(vali);
		if (Object.keys(vali).length === 0) {
			signupHandler(user);
		}
	};

	useEffect(() => setError(""), [location.pathname]);
	// Validate the form values
	const validate = (values) => {
		const errors = {};
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.firstName) {
			errors.firstName = "Firstname is required";
		}
		if (!values.lastName) {
			errors.lastName = "Lastname is required";
		}
		if (!values.email) {
			errors.email = "Email is required";
		} else if (!emailRegex.test(values.email)) {
			errors.email = "This is not a valid Email format ";
		}
		if (!values.password) {
			errors.password = "Password is required";
		} else if (values.password.length < 5) {
			errors.password = "Password must be more than 6 characters";
		}
		if (!values.confirmPassword) {
			errors.confirmPassword = "Confirm Password is required";
		} else if (values.confirmPassword !== values.password) {
			errors.confirmPassword = "Passwords do not match";
		}
		return errors;
	};

	return (
		<div className='Signup-container'>
			<div className='Signup-form'>
				<div>
					<h1>
						<span>Sign</span>up
					</h1>
				</div>
				<p className='error-msg'>{error?.[0]}</p>
				<form onSubmit={handleSubmit}>
					{/* Labels and inputs for form data */}
					<label className='label'>First Name</label>
					<input
						name='firstName'
						onChange={handleChange}
						className='input'
						value={user.firstName}
						type='text'
						required
					/>
					<p className='error-msg'>{formErrors?.firstName}</p>
					<label className='label'>Last Name</label>
					<input
						name='lastName'
						onChange={handleChange}
						className='input'
						value={user.lastName}
						type='text'
						required
					/>
					<p className='error-msg'>{formErrors?.lastName}</p>

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

					<label className='label'>Confirm Password</label>
					<input
						name='confirmPassword'
						onChange={handleChange}
						className='input'
						type='password'
						required
					/>
					<p className='error-msg'>{formErrors?.confirmPassword}</p>
					<p className='bottom-label'>
						Already have an account? <Link to='/login'>LogIn</Link>
					</p>

					<button className='btn' type='submit'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
