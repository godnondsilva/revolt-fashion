import styled from 'styled-components';

export const SignUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;

	@media screen and (max-width: 800px) {
		width: 320px;
	}
`;

export const Heading = styled.h2`
	margin: 10px 0;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 800px) {
		justify-content: space-between;
	}
`;
