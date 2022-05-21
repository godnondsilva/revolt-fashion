import styled from 'styled-components';

export const CategoryPageMainContainer = styled.div`
	width: 80%;
	margin: 0 auto;

	@media screen and (max-width: 800px) {
		width: 100%;
	}
`;

export const CategoryPageContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 50px;

	@media screen and (max-width: 800px) {
		grid-template-columns: repeat(2, 1fr);
		row-gap: 20px;
	}
`;

export const CategoryTitle = styled.h2`
	font-size: 32px;
	margin-bottom: 15px;
	@media screen and (max-width: 800px) {
		text-align: center;
	}
`;
