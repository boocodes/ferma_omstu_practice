import styled from "styled-components";
import React, {FormEvent, useState} from "react";
import {Link} from "react-router-dom";


interface Props{
    changeModalWindowFlag: (flag: boolean) => void;
    changeModalSuccessFlag: (flag: boolean) => void;
}



function UserDataFormModal({changeModalWindowFlag, changeModalSuccessFlag}:Props){

    const [successFlag, setSuccessFlag] = useState(false);


    function handleFormSumbit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        changeModalSuccessFlag(true);
    }


    return(
        <>
            <ExternalWrapper>
                <TitleWrapper>
                    <TitleText>Получите медиаплан<br/> для продвижения автобизнеса</TitleText>
                    <CloseModalIcon onClick={()=>changeModalWindowFlag(false)} src={"./images/closeIcon.svg"}/>
                </TitleWrapper>
                <UserDataForm onSubmit={handleFormSumbit}>
                    <UsernameInput type={"text"} placeholder={"Представьтесь"}/>
                    <UserphoneInput type={'telt'} placeholder={"+7 (___)___-__-__"}/>
                    <SubmitUserDataFormButton type={"submit"} value={"Получить"}/>
                </UserDataForm>
                <UnderFormDescription>
                    Нажимая кнопку «Получить», вы соглашаетесь<br/>
                    <UnderlineTextLink to={"/policy"}>«Политикой конфиденциальности»</UnderlineTextLink>
                </UnderFormDescription>
                <Underline/>

            </ExternalWrapper>
            <Overlay onClick={()=>changeModalWindowFlag(false)}/>
        </>
    )
}

const ExternalWrapper = styled.div`
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    padding: 40px 30px;
    border-radius: 20px;
    background-color: white;
    z-index: 5;
    font-family: 'Muller';
`

const Overlay = styled.div`
    z-index: 4;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: gray;
    top: 0;
    left: 0;
    opacity: 0.6;
`

const TitleWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
`
const CloseModalIcon = styled.img`
    width: 15px;
    cursor: pointer;
`

const TitleText = styled.h1`
    font-size: 24px;
    margin-right: 30px;
`

const UserDataForm = styled.form`
    display: flex;
    flex-direction: column;
`

const UsernameInput = styled.input`
    border: 1px solid #000000;
    margin-bottom: 15px;
    border-radius: 10px;
    outline: none;
    font-size: 20px;
    font-weight: 400;
    padding: 15px 0px 15px 20px; 
`
const UserphoneInput = styled.input`
    border: 1px solid #000000;
    margin-bottom: 15px;
    border-radius: 10px;
    outline: none;
    font-size: 20px;
    font-weight: 400;
    padding: 15px 0px 15px 20px; 
`
const SubmitUserDataFormButton = styled.input`
    background-color: #1E1F24;
    color: white;
    text-align: center;
    padding: 20px 0px;
    border: none;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
`
const UnderFormDescription = styled.p`
    font-size: 14px;
    color: #1E1F24;;
    margin-top: 15px;
`
const UnderlineTextLink = styled(Link)`
    color: #1E1F24;
    text-decoration: none;
`
const Underline = styled.div`
    background-color: #1E1F24;
    height: 1px;    
    position: relative;
    width: 235px;
`




export default UserDataFormModal;