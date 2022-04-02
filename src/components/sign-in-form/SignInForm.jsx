import { useState } from 'react';
import {
	signInAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
	signInWithGooglePopup,
} from '../../utils/firebase/firebaseUtils';

import FormInput from '../form-input/FormInput';
import Button from '../button/Button';

import './SignInForm.scss';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	// Function to handle the sign in with google popup
	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		createUserDocumentFromAuth(user);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		// Set form fields to all the previous values plus the new value
		setFormFields({ ...formFields, [name]: value });
	};

	const resetFormFields = () => {
		// Set form fields to defaultFormFields
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await signInAuthUserWithEmailAndPassword(
				email,
				password,
			);
			console.log(response);
			resetFormFields(defaultFormFields);
		} catch (error) {
			switch (error.code) {
				// If the error code is 'auth/wrong-password' then display that the password is incorrect
				case 'auth/wrong-password':
					alert('The password you entered for this email is incorrect');
					break;
				// If the error code is 'auth/user-not-found' then display that no user exists for that email
				case 'auth/user-not-found':
					alert('There is no user with this email');
					break;
				// unknown error (OR) unhandled error cases
				default:
					alert('There was an error signing in');
			}
		}
	};

	return (
		<div className='sign-up-container'>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
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
				<div className='buttons-container'>
					<Button type='submit'>Sign In</Button>
					<Button type='button' buttonType='google' onClick={signInWithGoogle}>
						Sign In With Google
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
