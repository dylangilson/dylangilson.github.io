/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * February 10, 2022
 */

import React, { useCallback, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { HeroContainer, HeroBackground, HeroContent, HeroH1, HeroP, HeroButtonWrapper, ArrowForward, ArrowRight, ParticlesBackground } from './HeroSectionComponents';
import { ExternalButton } from '../ButtonComponents';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    return (
        <HeroContainer>
            <HeroBackground>
                <ParticlesBackground>
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        options={{
                            fullScreen: {
                                enable: false,
                            },
                            background: {
                                color: {
                                    value: "#010606",
                                },
                            },
                            fpsLimit: 120,
                            interactivity: {
                                detectsOn: "window",
                                events: {
                                    onHover: {
                                        enable: true,
                                        mode: ["repulse"],
                                    },
                                },
                                modes: {
                                    repulse: {
                                        distance: 200,
                                        duration: 0.4,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: ["#FF595E", "#FFCA3A", "#8AC926", "#1982C4", "#6A4C93"],
                                },
                                links: {
                                    color: "#FFFFFF",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                collisions: {
                                    enable: false,
                                },
                                move: {
                                    directions: "none",
                                    enable: true,
                                    outModes: "bounce",
                                    random: false,
                                    speed: 6,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800,
                                    },
                                    value: 80,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    value: 5,
                                },
                            },
                            detectRetina: true,
                        }}
                    />
                </ParticlesBackground>
            </HeroBackground>
            <HeroContent>
                <HeroH1>Eliseo's Personal Project Site</HeroH1>
                <HeroP>View the summaries, source code and download all of my personal projects</HeroP>
                <HeroButtonWrapper>
                    <ExternalButton href='https://github.com/dylangilson' target='_blank' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        View GitHub {hover ? <ArrowForward /> : <ArrowRight />}
                    </ExternalButton>
                </HeroButtonWrapper>
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection;
