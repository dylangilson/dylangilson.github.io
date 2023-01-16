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
    background-color: #F2F2F2;
    padding: 20px;

    @media screen and (min-width: 768px) {
        margin-top: 125px;
    }
`;
