import styled from 'styled-components';
import {Button, colorGray, colour, colourDarkTheme} from "../../styled files/shared.styled.js";


export const PopBrowseMain = styled.div`
    width: 100%;
    height: 100%;
    min-width: 375px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 7;
`;

export const PopBrowseCnt = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
`;

export const PopBrowseBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 38px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    position: relative;
`;

export const PopBrowseContent = styled.div`
    display: block;
    text-align: left;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #000000;
    box-sizing: border-box;
`;

export const PopBrowseTopBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
    text-align: left;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #000000;
    box-sizing: border-box;
`;

export const PopBrowseTtl = styled.h3`
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
`;

export const StatusThemes = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const StatusTheme = styled.div`
    margin-right: 7px;
    margin-bottom: 7px;
`

export const StatusThemeLabel = styled.label`
    display: block;
    box-sizing: border-box;
    border-radius: 24px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    color: #94A6BE;
    padding: 11px 14px 10px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.14px;

    ${(props) => props.$isActive && colorGray};
`

export const PopBrowseStatus = styled.div`
    margin-bottom: 11px;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

// const func1 = () => {
//     return 0
// }
//
// const func2 = () => (0)
//
// export const TextArea555 = styled.textarea.attrs((props) => ({
//     readOnly: props.$readonly,
// }))``

export const TextArea = styled.textarea.attrs((props) => {
    return {
        readOnly: props.$readonly,
    }
})``

export const CategoriesTheme = styled.div`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 6px 20px;
    border-radius: 24px;
    margin-right: 7px;
    //opacity: 0.4;

    ${(props) => (props.theme.darkStyle ? colourDarkTheme : colour)[props.$color]};
`;

export const PopBrowseEdit = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
`;

export const BtnGroup = styled.div`
    display: flex;
    //gap: 8px;
    text-align: left;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #000000;
    box-sizing: border-box;
`;

export const PopBrowseEditBtn = styled(Button)`
    width: auto;
    //height: 30px;
    //margin-bottom: 10px;
    padding: 0 14px;
    //border-radius: 4px;
    //background: #565EEF;
    //border: none;
    //outline: none;
    //color: #FFFFFF;
    box-sizing: border-box;
`

