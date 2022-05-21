import styled from 'styled-components';

export const ProductCardContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;

	&:hover {
		img {
			opacity: 0.8;
		}

		button {
			opacity: 0.85;
			display: flex;
		}
	}

	img {
		width: 100%;
		height: 95%;
		object-fit: cover;
		margin-bottom: 5px;
	}

	button {
		width: 80%;
		opacity: 0.7;
		position: absolute;
		top: 255px;
		display: none;
	}

	@media screen and (max-width: 800px) {
		img,
		img:hover {
			opacity: unset;
		}
		button {
			display: flex;
			min-width: unset;
			width: unset;
		}
	}
`;

export const Footer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const Name = styled.span`
	width: 90%;
	margin-bottom: 15px;
	@media screen and (max-width: 800px) {
		width: 80%;
		font-size: 14px;
	}
`;

export const Price = styled.span`
	width: 10%;
	text-align: right;
	@media screen and (max-width: 800px) {
		width: 20%;
		font-size: 14px;
	}
`;
