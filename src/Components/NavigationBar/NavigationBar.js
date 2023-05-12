/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * February 10, 2022
 */

import React from 'react';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Bars, Nav, NavigationBarContainer, NavigationLogo, MobileIcon, NavigationMenu, NavigationItem, NavigationLinks,
        NavigationButton, NavigationButtonLink } from './NavigationBarComponents';
import icon from '../../res/Images/React Logo.svg';

const NavigationBar = ({ toggle }) => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const scrollToInfoSections = () => {
        scroll.scrollTo(1020);
    }

    const scrollToLanguageAndTools = () => {
        scroll.scrollTo(5320);
    }

    const downloadResume = () => {
        fetch(`Dylan's Resume.pdf`).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let a = document.createElement('a');
                
                a.href = fileURL;
                a.download = `Dylan's Resume.pdf`;
                a.click();
            })
        })
    }

    return (
        <>
            <IconContext.Provider value={{ }}>
                <Nav>
                    <NavigationBarContainer>
                        <NavigationLogo to='/' onClick={ scrollToTop }>Eliseo <img src={ icon } alt="" width="48px" /></NavigationLogo>
                        <MobileIcon onClick={ toggle }>
                            <Bars />
                        </MobileIcon>
                        <NavigationMenu>
                            <NavigationItem>
                                <NavigationLinks onClick={ downloadResume }>Resumé / CV</NavigationLinks>
                            </NavigationItem>
                            <NavigationItem>
                                <NavigationLinks href='//www.github.com/dylangilson' target='_blank' aria-label='GitHub'>GitHub</NavigationLinks>
                            </NavigationItem>
                            <NavigationItem>
                                <NavigationLinks onClick={ scrollToInfoSections }>Projects</NavigationLinks>
                            </NavigationItem>
                            <NavigationItem>
                                <NavigationLinks onClick={ scrollToLanguageAndTools }> Languages & Tools</NavigationLinks>
                            </NavigationItem>
                        </NavigationMenu>
                        <NavigationButton>
                            <NavigationButtonLink to='/EmailForm'>Email Me</NavigationButtonLink>
                        </NavigationButton>
                    </NavigationBarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
}

export default NavigationBar;
