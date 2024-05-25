import styled from "styled-components";

export const CardContainer = styled.div`
    width: 220px;
    height: 130px;
    background-color: ${({theme}) => theme.primary};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
`

export const CardsTopics = styled.h3`
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: ${({theme}) => theme.text};
    margin-bottom: 10px;
`

export const TopicText = styled.p`
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
`;

const colour = {
    orange: `background-color: #FFE4C2;
             color: #FF6D00;`,
    purple: `background-color: #E9D4FF;
             color: #9A48F1;`,
    green: `background-color: #B4FDD1;
            color: #06B16E;`
}

const colourDarkTheme = {
    orange: `background-color: #FF6D00;
             color: #FFE4C2;`,
    purple: `background-color: #9A48F1;
             color: #E9D4FF;`,
    green: `background-color: #06B16E;
            color: #B4FDD1;`
}

export const CardTopic = styled.div`
    width: auto;
    height: 20px;
    padding: 5px 14px;
    border-radius: 18px;
    ${(props) => (props.theme.darkStyle ? colourDarkTheme : colour)[props.$color]}
    
    p {
        font-size: 10px;
        font-weight: 600;
        line-height: 10px;
    }
}

`;

export const CardsItem = styled.div`
    padding: 5px;
    animation-name: card-animation;
    animation-duration: 500ms;
    animation-timing-function: linear;
`

export const CardGroup = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CardBtn = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2px;
`;

export const CardBtnDiv = styled.div`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94A6BE;
`;

export const CardContent = styled.div`
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background-color: ${(props) => props.color};
`;

export const CardDate = styled.div`
{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
    svg {
        width: 13px;
    }
    p {
        margin-left: 6px;
        font-size: 10px;
        line-height: 13px;
        color: #94A6BE;
        letter-spacing: 0.2px;
    }
`

