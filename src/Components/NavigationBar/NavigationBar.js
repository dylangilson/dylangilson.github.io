/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * February 10, 2022
 */

import React from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavigationBarContainer, NavigationLogo, MobileIcon, NavigationMenu, NavigationItem, NavigationLinks,
        NavigationButton, NavigationButtonLink } from './NavigationBarComponents';
import icon from '../../res/Images/React Logo.svg';

const NavigationBar = ({ toggle }) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#FFFFFF' }}>
                <Nav>
                    <NavigationBarContainer>
                        <NavigationLogo to='/' onClick={ toggleHome }>Eliseo <img src={ icon } alt="" width="48px" /></NavigationLogo>
                        <MobileIcon onClick={ toggle }>
                            <FaBars />
                        </MobileIcon>
                        <NavigationMenu>
                            <NavigationItem>
                                <NavigationLinks to='about-me' smooth={ true } duration={ 500 } spy={ true } exact='true' offset={ -80 }>About Me</NavigationLinks>
                            </NavigationItem>
                            <NavigationItem>
                                <NavigationLinks to='downloads' smooth={ true } duration={ 500 } spy= {true } exact='true' offset={ -80 }>Downloads</NavigationLinks>
                            </NavigationItem>
                            <NavigationItem>
                                <NavigationLinks to='contact-me' smooth={ true } duration={ 500 } spy={ true } exact='true' offset={ -80 }>Contact Me</NavigationLinks>
                            </NavigationItem>
                            <NavigationItem>
                                <NavigationLinks to='links' smooth={ true } duration={ 500 } spy={ true } exact='true' offset={ -80 }>Links</NavigationLinks>
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
