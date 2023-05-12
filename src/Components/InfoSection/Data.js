/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * February 10, 2022
 */

import reactLogo from '../../res/Images/React Logo.svg';
import cellularAutomataGIF from '../../res/Images/Cellular Automata.gif'
import gameBoyIcon from '../../res/Images/GameBoy.svg';
import osrsCharacterModelIcon from '../../res/Images/OSRS Character Model.webp';
import tetrisGIF from '../../res/Images/Tetris.gif'

export const homeObjOne = {
    id: 'tetris-ai',
    lightBackground: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Tetris AI',
    headLine: 'Tetris',
    description: 'An implementation of Tetris written in the Python programming language with TensorFlow and Keras for the Deep Learning Model',
    imgStart: false,
    img: tetrisGIF,
    alt: 'Tetris AI training',
    dark: false,
    primary: false,
    darkText: true,
    link: 'https://github.com/dylangilson/Tetris_AI'
}

export const homeObjTwo = {
    id: 'gameboy-c',
    lightBackground: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'GameBoy C',
    headLine: 'A Classic GameBoy Emulator',
    description: 'A DMG GameBoy and GameBoy Color written in C with SDL2 as the graphics and audio handler',
    imgStart: true,
    img: gameBoyIcon,
    alt: 'a DMG GameBoy',
    dark: true,
    primary: true,
    darkText: false,
    link: 'https://github.com/dylangilson/GameBoy_C'
}

export const homeObjThree = {
    id: 'blue-july',
    lightBackground: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Blue July',
    headLine: 'A 3D Role Playing Game',
    description: 'An RPG written in Java with 3D animation and rendering',
    imgStart: false,
    img: osrsCharacterModelIcon,
    alt: 'OSRS Character Model',
    dark: false,
    primary: false,
    darkText: true,
    link: 'https://github.com/dylangilson/Blue_July'
}

export const homeObjFour = {
    id: 'cellular-automata',
    lightBackground: false,
    lightText: true,
    lightTextDesc: true,
    topLine: '3D Cellular Automata',
    headLine: 'Cellular Automata',
    description: 'A 3D extension of John Conway\'s 2D "Game of Life" written in Rust',
    imgStart: true,
    img: cellularAutomataGIF,
    alt: '2D Cellular Automata example',
    dark: true,
    primary: true,
    darkText: false,
    link: 'https://github.com/dylangilson/3D_Cellular_Automata'
}

export const homeObjFive = {
    id: 'react-website',
    lightBackground: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'ReactJS Website',
    headLine: 'ReactJS Portfolio Website',
    description: 'This portfolio website written in ReactJS and hosted on Github Pages',
    imgStart: false,
    img: reactLogo,
    alt: 'React Logo',
    dark: false,
    primary: false,
    darkText: true,
    link: 'https://github.com/dylangilson/dylangilson.github.io'
}
