/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * February 10, 2022
 */

import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBarButtonWrapper, SideBarRoute } from "./SideBarComponents";

const SideBar = ({ isOpen, toggle }) => {
    const scrollToInfoSections = () => {
        scroll.scrollTo(720);
        toggle();
    }

    const scrollToLanguageAndTools = () => {
        scroll.scrollTo(6020);
        toggle();
    }

    return (
        <SideBarContainer isOpen={ isOpen } onClick={ toggle }>
            <Icon onClick={ toggle }>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink onClick={ toggle }>Resume</SideBarLink>
                    <SideBarLink href='//www.github.com/dylangilson' target='_blank' aria-label='GitHub' onClick={ toggle }>GitHub</SideBarLink>
                    <SideBarLink onClick={ scrollToInfoSections }>Projects</SideBarLink>
                    <SideBarLink onClick={ scrollToLanguageAndTools }>Languages and Tools</SideBarLink>
                </SideBarMenu>
                <SideBarButtonWrapper>
                    <SideBarRoute to='/EmailForm'>Email Me</SideBarRoute>
                </SideBarButtonWrapper>
            </SideBarWrapper>
        </SideBarContainer>
    );
}

export default SideBar;
