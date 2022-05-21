import styled from 'styled-components';

export const SignUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;

	@media screen and (max-width: 800px) {
		width: 320px;
		margin-top: 30px;
	}
`;

export const Heading = styled.h2`
	margin: 10px 0;
`;
