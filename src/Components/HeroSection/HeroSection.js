/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * February 10, 2022
 */

import React, {useState} from 'react';
import {HeroContainer, HeroBackground, VideoBackground, HeroContent, HeroH1, HeroP, HeroButtonWrapper, ArrowForward, ArrowRight} from './HeroSectionComponents';
import {ExternalButton} from '../ButtonComponents';
import video from '../../res/Videos/video-1.mp4';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBackground>
                <VideoBackground autoPlay loop muted playsInline src={video} />
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
