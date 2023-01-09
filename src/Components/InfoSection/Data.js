/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * February 10, 2022
 */

import reactLogo from '../../res/Images/React Logo.svg';
import gameBoyIcon from '../../res/Images/GameBoy.svg';

export const homeObjOne = {
    id: 'blue-july',
    lightBackground: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Blue July',
    headLine: 'A Role Playing Game',
    description: 'RPG written in Java with 3D animation, rendering',
    buttonLabel: 'View Code',
    imgStart: false,
    img: reactLogo,
    alt: 'React Logo',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjTwo = {
    id: 'rust-boy',
    lightBackground: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'RustBoy',
    headLine: 'A Classic GameBoy Emulator',
    description: 'A DMG GameBoy written in Rust',
    buttonLabel: 'View Code',
    imgStart: true,
    img: gameBoyIcon,
    alt: 'GameBoy',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjThree = {
    id: 'voxel-engine',
    lightBackground: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Voxel Engine',
    headLine: 'A 3D Voxel Engine written in C++',
    description: 'A 3D Voxel Engine used to learn the techniques of rendering using chunks',
    buttonLabel: 'View Code',
    imgStart: false,
    img: reactLogo,
    alt: 'React Logo',
    dark: false,
    primary: false,
    darkText: true
}
