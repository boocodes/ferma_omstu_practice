import styled from "styled-components";
import {OfferBanner} from '../../';



interface Props{
    changeModalFlag: (flag: boolean) => void;
}


function Offer({changeModalFlag}:Props){
    return(
        <ExternalWrapper>
            <OfferTitle>
                Нужны клиенты для автодилера?
            </OfferTitle>
            <OfferSubTitle>
                5 лет опыта с автотематикой!
            </OfferSubTitle>
            <OfferBanner changeModalFlag={changeModalFlag}/>

        </ExternalWrapper>
    )
}


const ExternalWrapper = styled.div`
    font-family: 'Muller';
    color: #FDFCF9;
    margin-top: 80px;
    padding-bottom: 20px;
    @media(max-width: 850px){
        margin-top: 60px;
    }
    @media(max-width: 510px){
        margin-top: 50px;
    }
`

const OfferTitle = styled.h1`
    font-size: 74px;
    font-weight: 500;
    margin-bottom: 30px;
    @media(max-width: 1700px){
        font-size: 56px;
        margin-bottom: 20px;
    }
    @media(max-width: 1200px){
        font-size: 42px;
    }
    @media(max-width: 760px){
        width: 344px;
    }   
    @media(max-width: 540px){
        margin-bottom: 10px;
    }
    @media(max-width: 510px){
        font-size: 34px;
        width: 300px;
    }
`
const OfferSubTitle = styled.h3`
    font-size: 42px;
    font-weight: 400;
    @media(max-width: 1700px){
        font-size: 32px;
    }
    @media(max-width: 1200px){
        font-size: 24px;
    }
    @media(max-width: 510px){
        font-size: 20px;
    }
`


export default Offer;