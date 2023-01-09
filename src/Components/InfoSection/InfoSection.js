/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * February 10, 2022
 */

import React from 'react';

import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ButtonWrapper, ImageWrapper, Image} from './InfoSectionComponents';
import {Button} from '../ButtonComponents';

const InfoSection = ({lightBackground, id, imgStart, topLine, lightText, headLine, darkText, description, primary, dark, buttonLabel, img, alt}) => {
    return (
        <>
            <InfoContainer lightBackground={lightBackground} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <ButtonWrapper>
                                    <Button to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                            primary={primary ? 1 : 0} dark={dark ? 1 : 0}>{buttonLabel}</Button>
                                </ButtonWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImageWrapper>
                                <Image src={img} alt={alt} height={600} />
                            </ImageWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
}

export default InfoSection;
