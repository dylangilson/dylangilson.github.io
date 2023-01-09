/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * February 10, 2022
 */

import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';

import {FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle,
        FooterLink, SocialMedia, SocialMediaWrapper, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterComponents';
import icon from '../../res/Images/React Logo.svg';

// TODO change all links below to corresponding links

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrapper>
                {/*
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
                            <FooterLink to='/BlueJuly'>School</FooterLink>
                            <FooterLink to='/RustBoy'>Work</FooterLink>
                            <FooterLink to='/VoxelEngine'>Leisure</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Downloads</FooterLinkTitle>
                            <FooterLink to='/BlueJuly'>Blue July</FooterLink>
                            <FooterLink to='/RustBoy'>RustBoy</FooterLink>
                            <FooterLink to='/VoxelEngine'>Voxel Engine</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Me</FooterLinkTitle>
                            <FooterLink to='/BlueJuly'>Blue July</FooterLink>
                            <FooterLink to='/RustBoy'>RustBoy</FooterLink>
                            <FooterLink to='/VoxelEngine'>Voxel Engine</FooterLink>
                            <FooterLink to='/EmailPage'>Email Me!</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
                            <FooterLink to='/BlueJuly'>Blue July</FooterLink>
                            <FooterLink to='/RustBoy'>RustBoy</FooterLink>
                            <FooterLink to='/VoxelEngine'>Voxel Engine</FooterLink>
                            <FooterLink to='/EmailPage'>Email Me!</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                */}
                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to='/' onClick={toggleHome}>Eliseo <img src={icon} /></SocialLogo>
                        <WebsiteRights>Eliseo © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='//www.facebook.com' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='//www.instagram.com' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='//www.youtube.com' target='_blank' aria-label='Youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='//www.twitter.com' target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='//www.linkedin.com' target='_blank' aria-label='LinkedIn'>
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='//www.github.com/dylangilson' target='_blank' aria-label='GitHub'>
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    );
}

export default Footer;
