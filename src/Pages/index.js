/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * February 10, 2022
 */

import React, {useState} from 'react';
import SideBar from '../Components/SideBar/SideBar';
import NavigationBar from '../Components/NavigationBar/NavigationBar';
import HeroSection from '../Components/HeroSection/HeroSection';
import InfoSection from '../Components/InfoSection/InfoSection';
import {homeObjOne, homeObjTwo, homeObjThree} from '../Components/InfoSection/Data';
import Services from "../Components/Services/Services";
import Footer from "../Components/Footer/Footer";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavigationBar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Services />
            <Footer anchor={"false"} />
        </>
    );
}

export default Home;
