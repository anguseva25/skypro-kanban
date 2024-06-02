import styled from 'styled-components';
import {darkTheme, lightTheme} from "../../themeStyle.styled.js";

export const HeaderPopUser = styled.div`
    display: block;
    position: absolute;
    top: 61px;
    right: 0;
    width: 213px;
    height: 205px;
    border-radius: 10px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    background: ${({theme}) => theme.primary};
    box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
    padding: 34px;
    text-align: center;
    z-index: 2;
`

export const PopUserName = styled.p`
    color: ${({theme}) => theme.darkStyle ? '#FFF' : '#000'};
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 4px;
`

export const PopUserTheme = styled.p`
    color: ${({theme}) => theme.darkStyle ? '#FFF' : '#000'};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
`

export const PopUserButton = styled.button`
    width: 72px;
    height: 30px;
    background: transparent;
    color: ${({theme}) => theme.darkStyle ? '#FFF' : '#565EEF'};
    border-radius: 4px;
    border: 1px solid #565EEF;
`

{/*const buttonExit = document.querySelector('.PopUserButton');
buttonExit.addEventListener('click', () => {
    console.log('click');
});*/}

export const PopUserMail = styled.p`
    color: #94A6BE;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 10px;
`

export const PopUserSetTheme = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
`

export const PopUserCheckbox = styled.input`
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #EAEEF6;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    
    &::before {
        content: "";
        position: absolute;
        top: 1px;
        left: ${({theme}) => theme.darkStyle ? '12px' : '1px'};
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: ${({theme}) => theme.darkStyle ? '#565EEF' : '#FFF'};
        transition: 0.5s;
`