import styled from "styled-components";
import {ContactButton} from "../../../ui";
import {useEffect, useState} from "react";

interface Props{

}


function HeaderContactInformation({}:Props){

    const [innerWindowWidth, setInnerWindowWidth] = useState(window.innerWidth);

    const [startHourTime, setStartHourTime] = useState(5);
    const [endHourTime, setEndHourTime] = useState(15);

    const [timeZoneName, setTimeZoneName] = useState<string>("КЛНГ");

    const startTimezone = 2;



    const timeZoneCitiesNames:{ [key: number]: string } = {
        2: "КЛНГ",
        3: "МСК",
        4: "СМР",
        5: "ЕКБ",
        6: "ОМСК",
        7: "КРСН",
        8: "ИРКТ",
        9: "ЯКТС",
        10: "ВЛДВ",
        11: "МГДН",
        12: "КМЧТ",
    }



    useEffect(()=>{
        const x = new Date(),
        currentTimeZoneOffsetInHours:number = Math.abs(x.getTimezoneOffset() / 60);
        if(currentTimeZoneOffsetInHours >= 2 && currentTimeZoneOffsetInHours <= 12){
            setStartHourTime(startHourTime + (currentTimeZoneOffsetInHours - startTimezone));
            setEndHourTime(endHourTime + (currentTimeZoneOffsetInHours - startTimezone));
            setTimeZoneName(timeZoneCitiesNames[currentTimeZoneOffsetInHours]);

        }
        else{
            setStartHourTime(startHourTime + 1);
            setEndHourTime(endHourTime + 1);
            setTimeZoneName(timeZoneCitiesNames[3]);
        }




    }, [])



    return(
        <ExternalWrapper>
            {
                innerWindowWidth >= 1100 ?
                    <>
                        <PhoneNumber>
                            +7 (3812)
                            <PhoneNumberBold>
                                308-136
                            </PhoneNumberBold>
                        </PhoneNumber>
                        <DateOfWorkingGraphic>
                            <DaysOfWorks>
                                ПН-ПТ
                            </DaysOfWorks>
                            <TimesAndZoneNameRow>
                                <HoursOfWorks>
                                    {startHourTime}:00
                                    -
                                    {endHourTime}:00

                                </HoursOfWorks>
                                <TimeZoneNameText>
                                    {timeZoneName}
                                </TimeZoneNameText>
                            </TimesAndZoneNameRow>
                        </DateOfWorkingGraphic>
                    </>
                    :
                    null
            }
            <ContactButtonWrapper>
                <ContactButton buttonText={"Позвоним бесплатно"}/>
            </ContactButtonWrapper>

        </ExternalWrapper>
    )
}


const ExternalWrapper = styled.div`
    display: flex;
    align-items: center;
    color: white;
    font-family: 'Muller';
`

const PhoneNumber = styled.p`
    font-size: 30px;
    margin-right: 20px;
    @media(max-width: 1500px){
        font-size: 24px;
    }
`
const PhoneNumberBold = styled.span`
    margin-left: 4px;
    font-weight: bold;
`

const DateOfWorkingGraphic = styled.div`
    line-height: 0.9;
    margin-right: 60px;
`

const TimesAndZoneNameRow = styled.div`
    display: flex;
    align-items: center;
`

const DaysOfWorks = styled.p`

`

const TimeZoneNameText = styled.p`
    font-weight: 400;
    font-size: 14px;
    @media(max-width: 1500px){
        font-size: 10px;
    }
    margin-left: 4px;
`


const HoursOfWorks = styled.p`
    font-weight: 400;
    font-size: 14px;
    @media(max-width: 1500px){
        font-size: 10px;
    }
`

const ContactButtonWrapper = styled.div`
    position: relative;
    width: 240px;
    @media(max-width: 800px){
        width: 200px;
    }
    
`




export default HeaderContactInformation;