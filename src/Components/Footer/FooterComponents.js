/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * February 10, 2022
 */

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
	background-color: #101522;

	${(props) => props.anchor === 'true' && `
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
	`}
`;

export const FooterWrapper = styled.div`
	padding: 24px 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1100px;
	margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
	display: flex;
	justify-content: center;

	@media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`;

export const FooterLinksWrapper = styled.div`
	display: flex;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const FooterLinkItems = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 16px;
	text-align: left;
	width: 160px;
	box-sizing: border-box;
	color: #ffffff;

	@media screen and (max-width: 420px) {
		margin: 0;
		padding: 10px;
		width: 100%;
	}
`;

export const FooterLinkTitle = styled.h1`
	font-size: 14px;
	margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
	color: #ffffff;
	text-decoration: none;
	margin-bottom: 0.5rem;
	font-size: 14px;

	&:hover {
		color: #2D98FF;
		transition: 0.3s ease-out;
	}
`;

export const SocialMedia = styled.section`
	width: 100%;
	max-width: 1000px;
`;

export const SocialMediaWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const SocialLogo = styled(Link)`
	color: #ffffff;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
	font-weight: bold;
`;

export const WebsiteRights = styled.small`
	color: #ffffff;
	margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`;

export const SocialIconLink = styled.a`
	color: #ffffff;
	font-size: 24px;
`;
