/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * February 10, 2022
 */

import React, { useState } from 'react';
import { ArrowForward, ArrowRight, ButtonWrapper, Column1, Column2, Heading, Image, ImageWrapper, InfoContainer, 
    InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoSectionComponents';
import { ExternalButton } from '../ButtonComponents';

const InfoSection = ({ lightBackground, id, imgStart, topLine, lightText, headLine, darkText, description, primary, dark, buttonLabel, img, alt, link }) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
            <InfoContainer lightBackground={ lightBackground } id={ id }>
                <InfoWrapper>
                    <InfoRow imgStart={ imgStart }>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{ topLine }</TopLine>
                                <Heading lightText={ lightText }>{ headLine }</Heading>
                                <Subtitle darkText={ darkText }>{ description }</Subtitle>
                                <ButtonWrapper>
                                    <ExternalButton href={ link } target='_blank' onMouseEnter={onHover} onMouseLeave={onHover} primary={primary ? 1 : 0} dark={dark ? 1 : 0}>
                                        View Code {hover ? <ArrowForward /> : <ArrowRight />}
                                    </ExternalButton>
                                </ButtonWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImageWrapper>
                                <Image src={ img } alt={ alt } height={ 600 } />
                            </ImageWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
}

export default InfoSection;
