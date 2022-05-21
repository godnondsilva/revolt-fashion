import styled from 'styled-components';

import { SpinnerContainer } from '../spinner/Spinner.styles';

export const DefaultButton = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px;
	font-size: 15px;
	background-color: black;
	color: white;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}

	@media screen and (max-width: 800px) {
		padding: 0 20px;
		min-width: 100px;
	}
`;

export const GoogleSignInButton = styled(DefaultButton)`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;

export const InvertedButton = styled(DefaultButton)`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;

export const PaymentButton = styled(InvertedButton)`
	margin-left: auto;
	margin-top: 30px;
`;

export const ButtonSpinner = styled(SpinnerContainer)`
	width: 30px;
	height: 30px;
`;
