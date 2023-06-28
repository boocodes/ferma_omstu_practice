import styled from "styled-components";
import OfferBanner from "./offerBanner/offerBanner";


interface Props{
    changeModalFlag: (flag: boolean) => void;
}


function Offer({changeModalFlag}:Props){
    return(
        <ExternalWrapper>
            <MainContent>
                <TitleText>
                    Нужны клиенты для автодилера?
                </TitleText>
                <SubTitleText>
                    5 лет опыта с автотематикой!
                </SubTitleText>
                <OfferBanner changeModalFlag={changeModalFlag}/>
            </MainContent>
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    
`

const MainContent = styled.div`
    font-family: 'Muller';
    color: white;
`

const TitleText = styled.h1`
    font-size: 68px;
    font-weight: 700;
    @media(max-width: 1700px){
        font-size: 55px;
    }
    @media(max-width: 1150px){
        font-size: 40px;
    }
    @media(max-width: 900px){
        width: 350px;
    }
    @media(max-width: 550px){
        font-size: 28px;
        
        width: 250px;
    }
`
const SubTitleText = styled.h3`
    font-size: 32px;
    font-weight: 500;
    margin-top: 15px;
    @media(max-width: 1700px){
        font-size: 28px;
    }
    @media(max-width: 1150px){
        font-size: 22px;
    }   
    @media(max-width: 550px){
        margin-top: 10px;
        font-size: 16px;
    }
    @media(max-width: 400px){
        width: 100%;
    }
    
    
`


export default Offer;