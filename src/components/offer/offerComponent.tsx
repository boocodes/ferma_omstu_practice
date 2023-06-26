import styled from "styled-components";
import {OfferBanner} from "./offerBanner";

interface Props{
    changeModalFlag: (flag: boolean)=> void;
}


function OfferComponent({changeModalFlag}:Props){
    return(
        <ExternalWrapper>
            <MainOfferText>
                Нужны клиенты для автодилера?
            </MainOfferText>
            <SubOfferText>
                5 лет опыта с автотематикой!
            </SubOfferText>
            <OfferBanner changeModalFlag={changeModalFlag}/>
        </ExternalWrapper>
    )
}


const ExternalWrapper = styled.div`
    font-family: 'Muller';
    z-index: 10;
    position: relative;
    z-index: 3;
    color: white;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const MainOfferText = styled.h1`
    font-size: 64px;
    margin-bottom: 10px;
    @media(max-width: 1500px){
        font-size: 48px;
    }
     @media(max-width: 1100px){
        width: 480px;
    }
    @media(max-width: 800px){
        width: 350px;
        font-size: 36px;
    }
`

const SubOfferText = styled.h2`
    font-size: 32px;
    font-weight: 500;
    @media(max-width: 1500px){
        font-size: 28px;
    }
    @media(max-width: 1100px){
        font-size: 22px;
    }
`

export default OfferComponent;
