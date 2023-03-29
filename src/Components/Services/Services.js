/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * February 10, 2022
 */

import React from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesComponents';
import reactIcon from '../../res/Images/React Logo.svg';
import javaIcon from '../../res/Images/Java Logo.svg';
import cppIcon from '../../res/Images/C++ Logo.svg';
import javascriptIcon from '../../res/Images/JavaScript Logo.svg';
import pythonIcon from '../../res/Images/Python Logo.svg';
import cIcon from '../../res/Images/C Logo.svg';
import rustIcon from '../../res/Images/Rust Logo.svg';
import blenderIcon from '../../res/Images/Blender Logo.svg';
import gimpIcon from '../../res/Images/GIMP Logo.svg';
import matlabIcon from "../../res/Images/MATLAB Logo.svg";
import typescriptLogo from "../../res/Images/Typescript Logo.svg";
import openglLogo from "../../res/Images/OpenGL Logo.svg";

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Languages & Tools</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={ reactIcon } />
                    <ServicesH2>React JS</ServicesH2>
                    <ServicesP>JavaScript Framework</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={ javascriptIcon } />
                    <ServicesH2>JavaScript</ServicesH2>
                    <ServicesP>Backend Web Development</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={ typescriptLogo } />
                    <ServicesH2>Typescript</ServicesH2>
                    <ServicesP>Superset of JavaScript</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={ cppIcon } />
                    <ServicesH2>C++</ServicesH2>
                    <ServicesP>Object-Oriented Language</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={ cIcon } />
                    <ServicesH2>C</ServicesH2>
                    <ServicesP>Systems Programming</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={ pythonIcon } />
                    <ServicesH2>Python</ServicesH2>
                    <ServicesP>Object-Oriented Language</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={ javaIcon } />
                    <ServicesH2>Java</ServicesH2>
                    <ServicesP>Object-Oriented Language</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={ rustIcon } />
                    <ServicesH2>Rust</ServicesH2>
                    <ServicesP>Systems Programming</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={ matlabIcon } />
                    <ServicesH2>MATLAB</ServicesH2>
                    <ServicesP>Numeric Computing Environment</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={ openglLogo } />
                    <ServicesH2>OpenGL</ServicesH2>
                    <ServicesP>2D and 3D Graphics Rendering API</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={ gimpIcon } />
                    <ServicesH2>GIMP</ServicesH2>
                    <ServicesP>2D Graphics</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={ blenderIcon } />
                    <ServicesH2>Blender</ServicesH2>
                    <ServicesP>3D Graphics</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
}

export default Services;
