import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;

	@media screen and (max-width: 800px) {
		height: 65px;
		padding: 10px;
		margin-bottom: 20px;
		svg {
			width: 100px;
		}
	}
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px 25px 25px 10px;

	@media screen and (max-width: 800px) {
		height: 50px;
		padding: 0;
	}

	&:hover {
		opacity: 0.8;
	}
`;

export const NavLinksContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;

	@media screen and (max-width: 800px) {
		width: 80%;
	}
`;

export const NavLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
	font-weight: bold;

	@media screen and (max-width: 800px) {
		font-size: 14px;
		padding: 10px 5px;
	}

	&:hover {
		opacity: 0.6;
	}
`;
