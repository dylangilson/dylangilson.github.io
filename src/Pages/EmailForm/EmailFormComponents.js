/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * January 11, 2023
 */

import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom';

export const EmailFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 10px;
  background-color: #f2f2f2;
  padding: 20px;
`;

export const BackButtonRoute = styled(LinkRouter)`
  border-radius: 50px;
  background: #04AA6D;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  float: right;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #899499;
    color: #010606;
  }
`;
