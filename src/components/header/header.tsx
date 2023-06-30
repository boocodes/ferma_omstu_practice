import styled from "styled-components";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import {Button} from '../../';


interface Props{
    changeModalFlag: (flag: boolean) => void;
    windowWidth: number;
    backgroundColor?: string;
}


function Header({changeModalFlag, windowWidth, backgroundColor}:Props){

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
        <ExternalWrapper backgroundColor={backgroundColor}>
            <LogoWrapper>
                <Link to={"/"}>
                    <LogoImage src={"./images/fermaLogo.svg"}/>
                </Link>
            </LogoWrapper>
            <ContactWrapper>
                {
                    windowWidth >= 980 ?
                        <>
                            <PhoneNumberWrapper>
                                <PhoneNumberPlainTextLink href={"tel:+73812308136"}>
                                    +7 (3812)
                                    <PhoneNumberBoldText>
                                        308-136
                                    </PhoneNumberBoldText>
                                </PhoneNumberPlainTextLink>
                            </PhoneNumberWrapper>
                            <WorkGraphicWrapper>
                                <WorkGraphicDaysWrapper>
                                    <WorkGraphicDaysText>
                                        ПН-ПТ
                                    </WorkGraphicDaysText>
                                </WorkGraphicDaysWrapper>
                                <WorkGraphicHoursWrapper>
                                    <WorkGraphicHoursText>
                                        {startHourTime}:00
                                        -
                                        {endHourTime}:00
                                    </WorkGraphicHoursText>
                                    <WorkGraphicTimezoneText>
                                        {timeZoneName}
                                    </WorkGraphicTimezoneText>
                                </WorkGraphicHoursWrapper>
                            </WorkGraphicWrapper>
                        </>
                        :
                        null
                }
                <ContactButtonWrapper onClick={()=>changeModalFlag(true)}>
                    <Button text={"Позвоним бесплатно"}/>
                </ContactButtonWrapper>
            </ContactWrapper>


        </ExternalWrapper>
    )
}


interface IExternalWrapper {
    backgroundColor?: string;
}

const ExternalWrapper = styled.div<IExternalWrapper>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Muller';
    color: white;
    background-color: ${props=> props.backgroundColor || "none"};
    padding: 50px 205px;
    @media(max-width: 1440px){
        padding: 50px 134px;
    }
    @media(max-width: 1200px){
        padding: 40px 60px;
    }
    @media(max-width: 850px){
        padding: 31px;
    }
    @media(max-width: 510px){
        padding: 20px 10px;
    }
`

const LogoWrapper = styled.div`

`
const LogoImage = styled.img`
    width: 250px;
    @media(max-width: 1200px){
        width: 190px;
    }
    @media(max-width: 510px){
        width: 120px;
    }
`

const ContactWrapper = styled.div`
    display: flex;
    align-items: center;
`
const PhoneNumberWrapper = styled.div`

`
const PhoneNumberPlainTextLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 24px;
    @media(max-width: 1200px){
        font-size: 20px;
    }
    
`
const PhoneNumberBoldText = styled.span`
    font-weight: 700;
    margin-left: 5px;
`

const WorkGraphicWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
`
const WorkGraphicDaysWrapper = styled.div`

`
const WorkGraphicDaysText = styled.p`
    font-size: 12px;
    font-weight: 400;
    @media(max-width: 1200px){
        font-size: 16px;
    }
`

const WorkGraphicHoursWrapper = styled.div`
    display: flex;
    align-items: center;
    
`
const WorkGraphicHoursText = styled.p`
    font-size: 12px;
    font-weight: 400;
    @media(max-width: 1200px){
        font-size: 16px;
    }
`
const WorkGraphicTimezoneText = styled.p`
    font-size: 12px;
    font-weight: 400;
    margin-left: 3px;
    @media(max-width: 1200px){
        font-size: 16px;
    }
`

const ContactButtonWrapper = styled.div`
    margin-left: 55px;
    width: 262px;
    @media(max-width: 1700px){
        width: 241px;
    }
    @media(max-width: 850px){
        margin-left: 0px;
    }
    @media(max-width: 510px){
        width: 165px;
    }
`


export default Header;