import styled from "styled-components";
import Header from "../../ui/header/header";
import {useEffect, useState} from "react";


interface Props{

}


function PolicyPage({}:Props){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    function resizeHandler(){
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);


    return(
        <ExternalWrapper>
            <Header backgroundColor={"#1e1d22"} windowWidth={windowWidth}/>
            <MainContent>
                <PolicyTitleText>Политика конфиденциальности</PolicyTitleText>
                <ParagraphWrapper>
                    <SecondSizeTypeText>1. Общие положения</SecondSizeTypeText>
                    <ThirdSizeTypeText>
                        1. 1.1. Настоящая Политика конфидициальности определяет общие условия сбора и обработки<br/>
                        персональных данных пользователей сайта fermastudio.com, принадлежащего ООО «Ферма»
                    </ThirdSizeTypeText>
                    <ThirdSizeTypeText>
                        2. (далее - ФЕРМА)
                    </ThirdSizeTypeText>
                    <ThirdSizeTypeText>
                        3. 1.2. ФЕРМА осуществляет обработку следующих персональных данных:
                    </ThirdSizeTypeText>
                    <ParagraphOptionsList>
                        <ParagraphOptionElem>полное имя;</ParagraphOptionElem>
                        <ParagraphOptionElem>адрес электронной почты;</ParagraphOptionElem>
                        <ParagraphOptionElem>номер мобильного телефона;</ParagraphOptionElem>
                    </ParagraphOptionsList>
                </ParagraphWrapper>
                <ParagraphWrapper>
                    <SecondSizeTypeText>2. Цели обработки персональных данных</SecondSizeTypeText>
                    <ThirdSizeTypeText>1. 2.1. Оператор ФЕРМА обрабатывает персональные данные пользователей с целью:</ThirdSizeTypeText>
                    <ParagraphOptionsList>
                        <ParagraphOptionElem>предоставления услуг;</ParagraphOptionElem>
                    </ParagraphOptionsList>
                </ParagraphWrapper>
                <ParagraphWrapper>
                    <SecondSizeTypeText>3. Доступ третьих лиц к персональным данным</SecondSizeTypeText>
                    <ThirdSizeTypeText>1. 3.1. Оператор ФЕРМА может передать персональные данные пользователей третьей стороне</ThirdSizeTypeText>
                    <ThirdSizeTypeText>2. в следующих случаях:</ThirdSizeTypeText>
                    <ParagraphOptionsList>
                        <ParagraphOptionElem>если передача персональных данных необходима для услуги;</ParagraphOptionElem>
                        <ParagraphOptionElem>если пользователь дал согласие на осуществление передачи своих данных третьей стороне;</ParagraphOptionElem>
                    </ParagraphOptionsList>
                </ParagraphWrapper>
                <ParagraphWrapper>
                    <SecondSizeTypeText>4. Обязанности оператора ФЕРМА по защите персональных данных</SecondSizeTypeText>
                    <ThirdSizeTypeText>
                        1. 4.1. Оператор ФЕРМА обязан принимать необходимые организационные и технические меры для<br/>
                        обеспечения конфиденциальности, целостности и доступности персональных данных пользователей.
                    </ThirdSizeTypeText>
                    <ThirdSizeTypeText>
                        2. 4.2. Оператор ФЕРМА обязан своевременно производить оценку соответствия требованиям<br/>
                        законодательства РФ в области защиты информации
                    </ThirdSizeTypeText>
                </ParagraphWrapper>
                <ParagraphWrapper>
                    <SecondSizeTypeText>5. Обратная связь</SecondSizeTypeText>
                    <ThirdSizeTypeText>1. 5.1. Все предложения и вопросы по использованию сайта следует направлять в службу поддержки</ThirdSizeTypeText>
                    <ThirdSizeTypeText>
                        2. по адресу электронной почты
                        <UnderlineText>support@ferma.agency</UnderlineText>
                    </ThirdSizeTypeText>
                </ParagraphWrapper>
            </MainContent>
        </ExternalWrapper>
    )
}


const ExternalWrapper = styled.div`
    background-color: white;
`

const MainContent = styled.div`
    background-color: white;
    padding: 50px 0px 30px 200px;
    @media(max-width: 1500px){
        padding: 50px 0px 30px 150px; 
    }
    @media(max-width: 1260px){
        padding: 50px 0px 30px 100px; 
    }
    @media(max-width: 750px){
        padding: 0px;
        padding-top: 50px;
        width: 500px;
        margin: 0 auto;
    }
    @media(max-width: 550px){
        width: 450px;
    }
    @media(max-width: 500px){
        width: 400px;
        padding-top: 30px;
    }
    @media(max-width: 450px){
        width: 320px;
    }
    
    
`

const PolicyTitleText = styled.h1`
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
    @media(max-width: 750px){
        font-size: 28px;
    }
    @media(max-width: 500px){
        font-size: 18px;
    }
    
`

const ParagraphWrapper = styled.div`
    margin-bottom: 20px;
    &:last-child{
        margin-bottom: 0px;
    }
    width: 100%;
    position: relative;
    
`

const SecondSizeTypeText = styled.p`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 15px;
    @media(max-width: 750px){
        font-size: 18px;
    }
`

const ThirdSizeTypeText = styled.p`
    font-weight: 400;
    font-size: 18px;
    margin-left: 10px;
    @media(max-width: 750px){
        font-size: 12px;
    }

`

const ParagraphOptionsList = styled.ul`
    margin-left: 55px;
`
const ParagraphOptionElem = styled.li`

`

const UnderlineText = styled.p`

`


export default PolicyPage;