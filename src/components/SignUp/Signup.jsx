import { useState } from "react";
import { useAuth } from "contexts/auth-context";
import "./Signup.css";
import { useEffect } from "react";

export const Signup = () => {
	const [user, setUser] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const { signupHandler } = useAuth();

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [formErrors, setFormErrors] = useState({});
	const { error, setError } = useAuth();

	// Handling input
	const handleChange = (e) => {
		console.log(e.target.name);
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(user));
		setSubmitted(true);
	};

	// Validate the form values
	const validate = (values) => {
		console.log(values.password.length);
		const errors = {};
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.firstname) {
			errors.firstname = "Firstname is required";
		}
		if (!values.lastname) {
			errors.lastname = "Lastname is required";
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

	useEffect(() => {
		if (Object?.keys(formErrors).length === 0 && submitted) {
			signupHandler(user);
		}
	}, [formErrors]);
	return (
		<div className='Signup-form'>
			<div>
				<h1>
					<span>Sign</span>up
				</h1>
			</div>
			<p className='error-msg'>
				{error === undefined ? `` : `Error: ${error?.[0]}`}
			</p>
			<form>
				{/* Labels and inputs for form data */}
				<label className='label'>First Name</label>
				<input
					name='firstname'
					onChange={handleChange}
					className='input'
					value={user.name}
					type='text'
					required
				/>
				<p className='error-msg'>{formErrors?.firstname}</p>
				<label className='label'>Last Name</label>
				<input
					name='lastname'
					onChange={handleChange}
					className='input'
					value={user.name}
					type='text'
					required
				/>
				<p className='error-msg'>{formErrors?.lastname}</p>

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

				<button onClick={handleSubmit} className='btn' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};
