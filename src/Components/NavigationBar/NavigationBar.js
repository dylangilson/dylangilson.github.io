/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * February 10, 2022
 */

import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';

import {Nav, NavigationBarContainer, NavigationLogo, MobileIcon, NavigationMenu, NavigationItem, NavigationLinks,
        NavigationButton, NavigationButtonLink} from './NavigationBarComponents';
import icon from '../../res/Images/React Logo.svg';

const NavigationBar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{color: '#ffffff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavigationBarContainer>
                        <NavigationLogo to='/' onClick={toggleHome}>Eliseooooo <img src={icon} /></NavigationLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavigationMenu>
                            <NavigationItem>
                                <NavigationLinks to='about-me' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About Me</NavigationLinks>
                            </NavigationItem>
                            <NavigationItem>
                                <NavigationLinks to='downloads' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Downloads</NavigationLinks>
                            </NavigationItem>
                            <NavigationItem>
                                <NavigationLinks to='contact-me' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact Me</NavigationLinks>
                            </NavigationItem>
                            <NavigationItem>
                                <NavigationLinks to='links' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Links</NavigationLinks>
                            </NavigationItem>
                        </NavigationMenu>
                        <NavigationButton>
                            <NavigationButtonLink to='/EmailPage'>Email Me</NavigationButtonLink>
                        </NavigationButton>
                    </NavigationBarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
}

export default NavigationBar;
