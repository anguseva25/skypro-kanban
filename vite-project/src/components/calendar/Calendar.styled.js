import styled, {css} from "styled-components";
import {DayPicker} from "react-day-picker";


export const CalendarContainer = styled.div`
    width: 182px;
    margin-bottom: 20px;
`;

export const CalendarTtlSubttl = styled.p`
    margin-bottom: 14px;
    padding: 0 7px;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

export const CalendarBlock = styled.div`
    display: block;
`;

export const CalendarHeader = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 14px;
    padding: 0 7px;
`;

export const CalendarMonth = styled.div`
    color: #94A6BE;
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
`;

export const CalendarContent = styled.div`
    margin-bottom: 12px;
`;

export const CalendarDays = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 7px 0;
    padding: 0 7px;
`;
export const EachCalendarDay = styled.div`
    color: #94A6BE;
    font-size: 10px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.2px;
`;

export const CalendarCells = styled.div`
    width: 182px;
    height: 126px;
    display: flex;
    flex-wrap: wrap;
`;

export const CalendarActiveDay = css`
    background-color: #94A6BE;
    color: #FFFFFF;
`;

export const CalendarCell = styled.div`
    width: 22px;
    height: 22px;
    margin: 2px;
    border-radius: 50%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    color: #94A6BE;
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.2px;
    cursor: pointer;
    
    ${(props) => props.$otherMonth && css`opacity: 0;`};
    ${(props) => props.$current && css`font-weight: 700;`};
    ${(props) => props.$activeDay && CalendarActiveDay};
`;

export const CalendarPeriod = styled.div`
    padding: 0 7px;
`;

export const CalendrDateControl = styled.p`
    color: #94A6BE;
    font-size: 10px;
    line-height: 1;
`;

export const DateControl = styled.span`
    color: #94A6BE;
    font-size: 10px;
    line-height: 1;
`;

export const Calendarier = styled(DayPicker)`
--rdp-cell-size: 22px;
font-size: 10px;
--rdp-caption-font-size: 14px;
color: #94A68E;
`