import styled from 'styled-components';

export const CategoriesContainer = styled.div`
	width: 80%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0 auto;

	@media screen and (max-width: 800px) {
		width: 100%;
	}
`;
