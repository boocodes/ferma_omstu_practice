import styled from "styled-components";
import {ContactButton} from "../../../ui";

interface Props{

}


function HeaderContactInformation({}:Props){
    return(
        <ExternalWrapper>
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
                <HoursOfWorks>
                    09:00 - 18:00
                </HoursOfWorks>
            </DateOfWorkingGraphic>
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
`
const PhoneNumberBold = styled.span`
    margin-left: 4px;
    font-weight: bold;
`

const DateOfWorkingGraphic = styled.div`
    line-height: 0.9;
    margin-right: 60px;
`

const DaysOfWorks = styled.p`

`

const HoursOfWorks = styled.p`
    font-weight: 400;
    font-size: 14px;
`

const ContactButtonWrapper = styled.div`
    position: relative;
    width: 240px;
`




export default HeaderContactInformation;