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
    margin-top: 100px;
`

const MainOfferText = styled.h1`
    font-size: 64px;
    margin-bottom: 15px;
`

const SubOfferText = styled.h2`
    font-size: 32px;
    font-weight: 500;
`

export default OfferComponent;
