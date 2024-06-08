import styled from "styled-components";


export const Header = styled.header`
    width: 100%;
    margin: 0 auto;
    background-color: ${({theme}) => theme.primary};
`;

export const HeaderBlock = styled.div`
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
`;

export const HeaderLogoLight = styled.div`
    display: ${({theme}) => theme.darkStyle ? 'none' : 'block'};
    img {
        width: 85px;
    }`;

export const HeaderLogoDark = styled.div`
    display: ${({theme}) => theme.darkStyle ? 'block' : 'none'};
    img {
        width: 85px;
    }`;

export const HeaderNav = styled.nav`
    max-width: 290px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderUser = styled.button`
    height: 20px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    color: ${({theme}) => theme.text2};
    cursor: pointer;
    background-color: transparent;
    border-color: transparent;
    

    &::after {
            content: "";
            display: block;
            width: 6px;
            height: 6px;
            border-radius: 1px;
            border-left: 1.9px solid ${({theme}) => theme.text2};
            border-bottom: 1.9px solid ${({theme}) => theme.text2};
            transform: rotate(-45deg);
            margin: -6px 0 0 5px;
            padding: 0;
        
        &:hover {
            color: #33399b;
        }
    }
`
