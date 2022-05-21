import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;

export const TitleContainer = styled.h2`
	margin-bottom: 15px;
	@media screen and (max-width: 800px) {
		text-align: center;
	}
`;

export const Title = styled.div`
	font-size: 32px;
	margin-bottom: 25px;
	cursor: pointer;
`;

export const Preview = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;

	@media screen and (max-width: 800px) {
		grid-template-columns: repeat(2, 1fr);
		row-gap: 20px;
	}
`;
