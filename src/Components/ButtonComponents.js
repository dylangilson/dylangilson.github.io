/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * February 10, 2022
 */

import styled from 'styled-components';
import { Link } from 'react-scroll';

// links to a local URL
export const Button = styled(Link)`
	border-radius: 50px;
	background: ${({ primary }) => (primary ? '#2D98FF' : '#FFA657')};
	white-space: nowrap;
	padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
	color: ${({ dark }) => (dark ? '#010606' : '#010606')};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ primary }) => (primary ? '#FFA657' : '#2D98FF')};;
	}
`;

// links to an external URL
export const ExternalButton = styled.a`
	border-radius: 50px;
	background: ${({ primary }) => (primary ? '#2D98FF' : '#FFA657')};
	white-space: nowrap;
	padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
	color: ${({ dark }) => (dark ? '#010606' : '#010606')};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ primary }) => (primary ? '#FFA657' : '#2D98FF')};;
	}

	&:hover, &:visited, &:link, &:active {
		text-decoration: none;
	}
`;
