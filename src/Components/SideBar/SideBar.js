/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * February 10, 2022
 */

import React from 'react';

import {SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBarButtonWrapper,
        SideBarRoute} from "./SideBarComponents";

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='about' onClick={toggle}>About</SideBarLink>
                    <SideBarLink to='downloads' onClick={toggle}>Downloads</SideBarLink>
                    <SideBarLink to='contact-me' onClick={toggle}>Contact Me</SideBarLink>
                    <SideBarLink to='links' onClick={toggle}>Links</SideBarLink>
                </SideBarMenu>
                <SideBarButtonWrapper>
                    <SideBarRoute to='/EmailForm'>Email Me</SideBarRoute>
                </SideBarButtonWrapper>
            </SideBarWrapper>
        </SideBarContainer>
    );
}

export default SideBar;
