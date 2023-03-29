/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * January 11, 2023
 */

import styled from 'styled-components';

export const EmailFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 20px;
    background-color: #E8E4D6;
    padding: 20px;

    @media screen and (min-width: 768px) {
        margin-top: 125px;
    }
`;

export const TextInput = styled.input.attrs({ type: 'text' })`
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
`;

export const SubmitInput = styled.input.attrs({ type: 'submit' })`
    border-radius: 50px;
    background: #EF3F6E;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    font-weight: lighter;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #2D98FF;
        color: #010606;
    }
`;
