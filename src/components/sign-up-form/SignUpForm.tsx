import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/FormInput';
import Button from '../button/Button';

import { SignUpContainer, Heading } from './SignUpForm.styles';
import { signUpStart } from '../../store/user/userActions';
import { AuthError, AuthErrorCodes } from 'firebase/auth';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const dispatch = useDispatch();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		// Set form fields to all the previous values plus the new value
		setFormFields({ ...formFields, [name]: value });
	};

	const resetFormFields = () => {
		// Set form fields to defaultFormFields
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		try {
			// Create the user in firebase authentication and get the user document
			dispatch(signUpStart(email, password, displayName));
			// Reset the form fields to the default values
			resetFormFields();
		} catch (error) {
			// If the error code is 'auth/email-already-in-use' then display that the email is already in use
			if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
				alert('Email already in use');
			}
			// Fallback error for all error cases
			else {
				console.log('Error creating an account!', error);
			}
		}
	};

	return (
		<SignUpContainer>
			<Heading>Don't have an account?</Heading>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Display Name'
					type='text'
					required
					onChange={handleChange}
					name='displayName'
					value={displayName}
				/>
				<FormInput
					label='Email'
					type='email'
					required
					onChange={handleChange}
					name='email'
					value={email}
				/>
				<FormInput
					label='Password'
					type='password'
					required
					onChange={handleChange}
					name='password'
					value={password}
				/>
				<FormInput
					label='Confirm Password'
					type='password'
					required
					onChange={handleChange}
					name='confirmPassword'
					value={confirmPassword}
				/>
				<Button type='submit'>Sign Up</Button>
			</form>
		</SignUpContainer>
	);
};

export default SignUpForm;
