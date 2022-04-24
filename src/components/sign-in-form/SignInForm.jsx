import { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/FormInput';
import Button, { BUTTON_TYPES } from '../button/Button';

import { SignUpContainer, Heading, ButtonContainer } from './SignInForm.styles';
import {
	emailSignInStart,
	googleSignInStart,
} from '../../store/user/userActions';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const dispatch = useDispatch();

	// Function to handle the sign in with google popup
	const signInWithGoogle = async () => {
		dispatch(googleSignInStart());
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
			dispatch(emailSignInStart(email, password));
			// Reset the form fields to the default values
			resetFormFields(defaultFormFields);
		} catch (error) {
			console.log('Could not sign in with email and password!');
		}
	};

	return (
		<SignUpContainer>
			<Heading>Already have an account?</Heading>
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
				<ButtonContainer>
					<Button type='submit'>Sign In</Button>
					<Button
						type='button'
						buttonType={BUTTON_TYPES.google}
						onClick={signInWithGoogle}
					>
						Sign In With Google
					</Button>
				</ButtonContainer>
			</form>
		</SignUpContainer>
	);
};

export default SignInForm;
