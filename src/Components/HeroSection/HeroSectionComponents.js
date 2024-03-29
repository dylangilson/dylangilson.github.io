/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * February 10, 2022
 */

import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const HeroContainer = styled.div`
	background: #010606;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	height: 1100px;
	width: 100%;
	position: relative;
	z-index: 1;

	@media screen and (max-width: 768px) {
		height 800px;
	}

	:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
					linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
		z-index: 2;
	}
`;

export const HeroBackground = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
`;

export const ParticlesBackground = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	overflow: hidden;
`

export const HeroContent = styled.div`
	z-index: 3;
	max-width: 1200px;
	position: absolute;
	padding: 8px 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const HeroH1 = styled.h1`
	color: #FFFFFF;
	font-size: 48px;
	text-align: center;

	@media screen and (max-width: 768px) {
		font-size: 40px;
	}

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

export const HeroP = styled.p`
	margin-top: 24px;
	color: #FFFFFF;
	font-size: 24px;
	text-align: center;
	max-width: 600px;

	@media screen and (max-width: 768px) {
		font-size: 24px;
	}

	@media screen and (max-width: 480px) {
		font-size: 18px;
	}
`;

export const HeroButtonWrapper = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
	margin-left: 8px;
	font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
	margin-left: 8px;
	font-size: 20px;
`;
