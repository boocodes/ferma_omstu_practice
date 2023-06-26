import styled from "styled-components";
import ContactButton from "../../../ui/ringContactButton/ContactButton";

interface Props{
    changeModalFlag: (flag: boolean)=> void;
}


function OfferBanner({changeModalFlag}:Props){
    return(
        <ExternalWrapper>
            <TitleText>Ответье на несколько вопросов и получите:</TitleText>
            <OptionsListWrapper>
                <OptionsElem>1. Бесплатный аудит рекламной компании и сайта</OptionsElem>
                <OptionsElem>2. Расчет бюджета для эффективной рекламной компании</OptionsElem>
                <OptionsElem>3. Рекомендации по повышению конверсии</OptionsElem>
            </OptionsListWrapper>
            <ContactButtonWrapper>
                <ContactButton changeModalFlag={changeModalFlag} buttonText={"Получить"}/>
            </ContactButtonWrapper>
        </ExternalWrapper>
    )
}


const ExternalWrapper = styled.div`
    margin-top: 40px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);
    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    width: 830px;
    padding: 30px 30px;
    border-radius: 20px;
    font-family: 'Muller';
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    @media(max-width: 1500px){
        width: 650px;
    }
    @media(max-width: 800px){
        position: relative;
        width: 100%;
    }
`

const TitleText = styled.p`
    font-size: 35px;
    font-weight: bold;
    @media(max-width: 1500px){
        font-size: 28px;
    }
     @media(max-width: 1100px){
        font-size: 28px;
        width: 400px;
    }
     @media(max-width: 800px){
        font-size: 24px;
        width: 300px;
    }
`

const OptionsListWrapper = styled.div`
    margin-top: 20px;
`

const OptionsElem = styled.p`
    font-size: 22px;
    margin-bottom: 15px;
    :last-child{
        margin-bottom: 0px;
    }
    @media(max-width: 1500px){
        font-size: 18px;
    }
    @media(max-width: 800px){
        font-size: 15px;
    }
    @media(max-width: 800px){
        font-size: 15px;
    }
   
`

const ContactButtonWrapper = styled.div`
   margin-top: 20px;
   position: relative;
   width: 100%;
`


export default OfferBanner;