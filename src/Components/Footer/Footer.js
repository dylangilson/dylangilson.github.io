/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * February 10, 2022
 */

import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterWrapper, SocialMedia, SocialMediaWrapper, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterComponents';
import icon from '../../res/Images/React Logo.svg';

const Footer = ({ anchor }) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer anchor={ anchor }>
            <FooterWrapper>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to='/' onClick={ toggleHome }>Eliseo <img src={ icon } alt="" width="48px" /></SocialLogo>
                        <WebsiteRights>Eliseo © { new Date().getFullYear() } All Rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='//www.github.com/dylangilson' target='_blank' aria-label='GitHub'>
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href='//www.linkedin.com/in/dylan-gilson-852856225' target='_blank' aria-label='LinkedIn'>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    );
}

export default Footer;
