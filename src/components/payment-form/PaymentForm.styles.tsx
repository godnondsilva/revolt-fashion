import styled from 'styled-components';

export const PaymentFormContainer = styled.div`
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 800px) {
		height: 200px;
	}
`;

export const FormContainer = styled.form`
	height: 100px;
	min-width: 500px;

	@media screen and (max-width: 800px) {
		min-width: 300px;
	}
`;

export const Title = styled.h2`
	margin-bottom: 20px;

	@media screen and (max-width: 800px) {
		font-size: 20px;
	}
`;
