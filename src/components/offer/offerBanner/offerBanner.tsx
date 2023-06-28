import styled from "styled-components";


interface Props{
    changeModalFlag: (flag: boolean) => void;
}


function OfferBanner({changeModalFlag}:Props){
    return(
        <ExternalWrapper>
            <MainContent>
                <TitleText>
                    Ответье на несколько вопросов и получите:
                </TitleText>
                <ElemList >
                    <ElemText>
                        Бесплатный аудит рекламной компании и сайта
                    </ElemText>
                    <ElemText>
                        Расчет бюджета для эффективной рекламной компании
                    </ElemText>
                    <ElemText>
                        Рекомендации по повышению конверсии
                    </ElemText>
                </ElemList>
                <GetButton onClick={()=>changeModalFlag(true)}>
                    Получить
                </GetButton>
            </MainContent>
        </ExternalWrapper>
    )
}


const ExternalWrapper = styled.div`
    width: 820px;
    margin-top: 50px;
    
    @media(max-width: 1700px){
        width: 700px;
    }
    @media(max-width: 1240px){
        width: 100%;
    }
    @media(max-width: 550px){
        margin-top: 30px;
    }
    
`

const MainContent = styled.div`
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);
    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    padding: 30px 25px;
    font-family: 'Muller';
    border-radius: 20px;
    backdrop-filter: blur(2px);
`

const TitleText = styled.p`
    font-size: 36px;
    font-weight: 700;
    @media(max-width: 1240px){
        font-size: 20px;
    }
    @media(max-width: 550px){
        width: 300px;
        font-size: 18px;
    }
    @media(max-width: 400px){
        
        width: 100%;
    }
`
const ElemList = styled.ul`
    margin-top: 15px;
    margin-bottom: 30px;
    margin-left: 20px;
    @media(max-width: 550px){
        margin-bottom: 20px;
        margin-top: 10px;
    }
    
`
const ElemText = styled.li`
    font-size: 22px;
    list-style: decimal;
    font-weight: 500;
    margin-bottom: 20px;
    &:last-child{
        margin-bottom: 0px;
    }
    @media(max-width: 1240px){
        font-size: 14px;
        margin-bottom: 10px;
    }
    @media(max-width: 550px){
        font-size: 12px;
        margin-bottom: 4px;
        width: 97%;
    }
`
const GetButton = styled.button`
    font-size: 24px;
    font-family: 'Muller';
    cursor: pointer;
    border: none;
    color: black;
    font-weight: bold;
    border-radius: 10px;
    height: 55px;
    @media(max-width: 1240px){
        font-size: 18px;
        height: 45px;
    }
    @media(max-width: 550px){
        font-size: 15px;
        height: 35px;
    }
    
`



export default OfferBanner;