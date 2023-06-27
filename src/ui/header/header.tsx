import styled from "styled-components";
import {Link} from "react-router-dom";
import {Interface} from "readline";


interface Props{
    windowWidth: number;
    backgroundColor?: string;
}


function Header({windowWidth, backgroundColor}:Props){
    return(
        <ExternalWrapper backgroundColor={backgroundColor}>
            <MainWrapper>
                <Link to={"/"}>
                    <LogoWrapper>
                        <LogoImage src={"./images/fermaLogo.svg"}/>
                    </LogoWrapper>
                </Link>
                <ContactWrapper>
                    {
                        windowWidth >= 1000 ?
                            <>
                                <PhoneNumberWrapper>
                                    <PhoneNumberPlainText>
                                        +7 (3812)
                                        <PhoneNumberBoldText>
                                            308-136
                                        </PhoneNumberBoldText>
                                    </PhoneNumberPlainText>
                                </PhoneNumberWrapper>
                                <WorkGraphicWrapper>
                                    <WorkingDaysText>
                                        ПН-ПТ
                                    </WorkingDaysText>
                                    <WorkingHoursWrapper>
                                        <WorkingHoursText>
                                            06:00-15:00
                                        </WorkingHoursText>
                                        <TimezoneNameText>МСК</TimezoneNameText>
                                    </WorkingHoursWrapper>
                                </WorkGraphicWrapper>
                            </>

                            :
                            null
                    }
                    <RingButton>
                        Позвоним бесплатно
                    </RingButton>
                </ContactWrapper>
            </MainWrapper>
        </ExternalWrapper>
    )

}



interface IExternalWrapper{
    backgroundColor?: string;
}

const ExternalWrapper = styled.div<IExternalWrapper>`
   
    margin-bottom: 0px;
    background-color: ${props=> props.backgroundColor || "none"};
    @media(max-width: 750px){
        justify-content: center;
        margin-bottom: 0px;
    }
    
`

const MainWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 200px 50px 200px;   
    @media(max-width: 1500px){
        padding: 50px 150px 50px 150px;
    }
    @media(max-width: 1260px){
        padding: 50px 150px 50px 100px;
    }
    @media(max-width: 750px){
        padding: 30px 0px 30px 0px;
    }
    @media(max-width: 750px){
        width: 500px;
        margin: 0 auto;
    }
    @media(max-width: 550px){
        width: 450px;
    }
    @media(max-width: 500px){
        width: 400px;
    }
    @media(max-width: 450px){
        width: 320px;
    }
`

const LogoWrapper = styled.div`
    @media(max-width: 750px){
        margin-right: 50px;
    }
    @media(max-width: 400px){
        margin-right: 25px;
    }
    @media(max-width: 450px){
        margin-right: 0px;
    }
`

const LogoImage = styled.img`
    width: 200px;
    @media(max-width: 750px){
        width: 140px;
    }
    @media(max-width: 400px){
        width: 100px;
    }
    
    
`

const ContactWrapper = styled.div`
    font-family: 'Muller';
    color: white;
    display: flex;
    align-items: center;
`

const PhoneNumberWrapper = styled.div`
    display: flex;
    align-items: center;
`
const PhoneNumberPlainText = styled.p`
    font-size: 24px;
    margin-right: 15px;
    @media(max-width: 1260px){
        font-size: 20px;
        margin-right: 10px;
    }
   
   
`
const PhoneNumberBoldText = styled.span`
    font-weight: bold;
    margin-left: 5px;
`

const WorkGraphicWrapper = styled.div`
    margin-right: 60px;
    @media(max-width: 1500px){
        margin-right: 40px;
    }
`
const WorkingDaysText = styled.p`
    margin: 0;
    font-size: 12px;
    @media(max-width: 1260px){
        font-size: 10px;
    }
`
const WorkingHoursWrapper = styled.div`
    display: flex;
    align-items: center;
`
const WorkingHoursText = styled.p`
    font-size: 12px;
    @media(max-width: 1260px){
        font-size: 10px;
    }
`
const TimezoneNameText = styled.p`
    font-size: 12px;
    margin-left: 5px;
    @media(max-width: 1260px){
        font-size: 10px;
        margin-left: 5px;
    }
`

const RingButton = styled.button`
    font-size: 22px;
    cursor: pointer;    
    font-weight: 700;
    padding: 20px;
    border-radius: 15px;
    border: none;
    outline: none;
    @media(max-width: 1500px){
        font-size: 20px;
    }
    @media(max-width: 1260px){
        font-size: 18px;
    }
    @media(max-width: 750px){
        font-size: 14px;
        padding: 15px;
    }
    @media(max-width: 500px){
        font-size: 13px;
        padding: 10px 15px;
        border-radius: 10px;
    }
`



export default Header;