import styled from "styled-components";
import React, {FormEvent, useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import InputMask from 'react-input-mask';


interface Props{
    changeModalWindowFlag: (flag: boolean) => void;
    changeModalSuccessFlag: (flag: boolean) => void;
}



function UserDataFormModal({changeModalWindowFlag, changeModalSuccessFlag}:Props){
    const formRef = useRef<HTMLFormElement>(null);
    const [usernameValue, setUsernameValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [buttonActiveFlag, setButtonActiveFlag] = useState(false);
    const [usernameInputErrorFlag, setUsernameInputErrorFlag] = useState(true);




    useEffect(()=>{
        setButtonActiveFlag(false);
        console.log(phoneValue);
        if(!!usernameValue.trim() && phoneValue.charAt(phoneValue.length-1) !== "_" && !!phoneValue.trim()){
            setButtonActiveFlag(true);
        }
        if(!!usernameValue.trim()){
            setUsernameInputErrorFlag(false);
        }
        else{
            setUsernameInputErrorFlag(true);
        }
    }, [usernameValue, phoneValue])


    // @ts-ignore
    const passwordHandleInput = ({ target: { value } }) => setPhoneValue(value)
    // @ts-ignore
    const usernameHandleInput = ({ target: { value } }) => setUsernameValue(value)



    function handleFormSumbit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log(formRef);
        changeModalSuccessFlag(true);
    }

    return(
        <>
            <ExternalWrapper>
                <TitleWrapper>
                    <TitleText>Получите медиаплан<br/> для продвижения автобизнеса</TitleText>
                    <CloseModalIcon onClick={()=>changeModalWindowFlag(false)} src={"./images/closeIcon.svg"}/>
                </TitleWrapper>
                <UserDataForm ref={formRef} onSubmit={handleFormSumbit}>
                    <UsernameInput
                        usernameInputErrorFlag={usernameInputErrorFlag}
                        value={usernameValue}
                        type={"text"}
                        placeholder={"Представьтесь"}
                        onChange={usernameHandleInput}
                    />
                    {
                        usernameInputErrorFlag ?
                            <UsernameInputHelpWindow>
                                <UsernameInputHelpText>Обязательное поле</UsernameInputHelpText>
                            </UsernameInputHelpWindow>
                            :
                            null
                    }
                    <UserphoneInput
                        mask='+7 (999) 999-99-99'
                        placeholder={"+7 (___) ___-__-__"}
                        value={phoneValue}
                        onChange={passwordHandleInput}
                    />
                    {buttonActiveFlag ?
                        <SubmitUserDataFormButton type={"submit"} value={"Получить"}/> : <NotActiveSubmitUserDataFormButton type={"submit"} disabled={true} value={"Получить"}/>
                    }
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

interface IUsernameInput{
    usernameInputErrorFlag: boolean;
}


const UsernameInput = styled.input<IUsernameInput>`
    border: 1px solid #000000;
    margin-bottom: 22px;
    border-radius: 10px;
    outline: none;
    font-size: 18px;
    font-weight: 400;
    padding: 15px 0px 15px 30px; 
    border: 1px solid ${props => props.usernameInputErrorFlag ? "red" : "black"};
`

const UsernameInputHelpWindow = styled.div`
    position: absolute;
    margin-top: 60px;
    margin-left: 20px;
    background-image: url('./images/helpMessage.svg');
    height: 100px;
    z-index: 5;
    background-repeat: no-repeat;
  
    padding: 5px 10px;
`

const UsernameInputHelpText = styled.p`
    font-size: 12px;
    color: red;
    padding-top: 10px;
`


const UserphoneInput = styled(InputMask)`
    border: 1px solid #000000;  
    margin-bottom: 20px;
    border-radius: 10px;
    outline: none;
    font-size: 20px;
    font-weight: 400;
    padding: 15px 0px 15px 30px; 
`
const SubmitUserDataFormButton = styled.input`
    background-color: black;
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

const NotActiveSubmitUserDataFormButton = styled.input`
    background-color: #78797c;
    color: white;
    cursor: not-allowed;
    text-align: center;
    padding: 20px 0px;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 20px;
    font-weight: 700;
`


const UnderFormDescription = styled.p`
    font-size: 14px;
    color: #78797c;
    margin-top: 15px;
`
const UnderlineTextLink = styled(Link)`
    color: #78797c;
    text-decoration: none;
`
const Underline = styled.div`
    background-color: #78797c;
    height: 1px;    
    position: relative;
    width: 235px;
`




export default UserDataFormModal;