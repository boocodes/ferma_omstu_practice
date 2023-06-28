import styled from "styled-components";
import InputMask from 'react-input-mask';
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

interface Props{
    changeModalFlag: (flag: boolean)=> void;
    changeModalSuccessFlag: (flag: boolean) => void;
}


function UserFormModal({changeModalFlag, changeModalSuccessFlag}:Props){

    const formRef = useRef<HTMLFormElement>(null);
    const [usernameValue, setUsernameValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [buttonActiveFlag, setButtonActiveFlag] = useState(false);
    const [usernameInputErrorFlag, setUsernameInputErrorFlag] = useState(false);




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

    useEffect(()=>{
        setUsernameInputErrorFlag(false);
    }, [])


    // @ts-ignore
    const phoneHandleInput = ({ target: { value } }) => {
        if(usernameInputErrorFlag) return;
        setPhoneValue(value)
    }
    // @ts-ignore
    const usernameHandleInput = ({ target: { value } }) => {
        console.log(1)
        setUsernameValue(value)
    }



    function handleFormSumbit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log(formRef);
        changeModalSuccessFlag(true);
    }




    return(
        <>
            <Overlay onClick={()=>changeModalFlag(false)}/>
            <ExternalWrapper>
                <MainContent>
                    <ModalHeader>
                        <TitleText>
                            Получите медиаплан<br/> для продвижения автобизнеса
                        </TitleText>
                        <CloseIcon onClick={()=>changeModalFlag(false)} src={"./images/closeIcon.svg"}/>
                    </ModalHeader>
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
                            onChange={phoneHandleInput}
                        />
                        {buttonActiveFlag ?
                            <SubmitUserDataFormButton type={"submit"} value={"Получить"}/> : <NotActiveSubmitUserDataFormButton type={"submit"} disabled={true} value={"Получить"}/>
                        }
                    </UserDataForm>
                    <UnderFormDescription>
                        Нажимая кнопку «Получить», вы соглашаетесь<br/>
                    </UnderFormDescription>
                        <UnderlineDescriptionText to={"/policy"}>«Политикой конфиденциальности»</UnderlineDescriptionText>
                </MainContent>
            </ExternalWrapper>

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
    z-index: 4;
    width: 500px;
    @media(max-width: 980px){
        width: 450px;
    }
    @media(max-width: 500px){
        width: 350px;
    }
    @media(max-width: 350px){
        width: 300px;
    }
   
`

const Overlay = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: gray;
    opacity: 0.5;
    z-index: 3;
`

const MainContent = styled.div`
    
`

const ModalHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`


const TitleText = styled.p`
    font-size: 24px;
    font-weight: 700;
    @media(max-width: 980px){
        font-size: 18px;    
    }
    @media(max-width: 500px){
        font-size: 16px;
    }
    @media(max-width: 350px){
        font-size: 13px;
    }
    
    
`
const CloseIcon = styled.img`
    cursor: pointer;
    width: 20px;
    @media(max-width: 500px){
        width: 15px;
    }
`


const UserDataForm = styled.form`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
`

interface IUsernameInput{
    usernameInputErrorFlag: boolean;
}

const UsernameInput = styled.input<IUsernameInput>`
    border: 1px solid #000000;
    margin-bottom: 15px;
    border-radius: 10px;
    outline: none;
    font-size: 18px;
    font-weight: 400;
    padding: 15px 0px 15px 30px; 
    border: 1px solid ${props => props.usernameInputErrorFlag ? "red" : "black"};
    @media(max-width: 500px){
        font-size: 15px;
    }
`

const UserphoneInput = styled(InputMask)`
    border: 1px solid #000000;  
    margin-bottom: 15px;
    border-radius: 10px;
    outline: none;
    font-size: 20px;
    font-weight: 400;
    padding: 15px 0px 15px 30px;
    @media(max-width: 500px){
        font-size: 15px;
    }
`
const UsernameInputHelpWindow = styled.div`
    position: absolute;
    margin-top: 55px;
    margin-left: 20px;
    background-image: url('./images/helpMessage.svg');
    height: 35px;
    z-index: 5;
    background-repeat: no-repeat;
    padding: 5px 10px;
    @media(max-width: 500px){
        margin-top: 50px;
    }
`
const UsernameInputHelpText = styled.p`
    font-size: 12px;
    color: red;
    padding-top: 10px;
`

const SubmitUserDataFormButton = styled.input`
    background-color: black;
    color: white;
    text-align: center;
    padding: 15px 0px;
    border: none;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    height: 50px;
    font-size: 20px;
    font-weight: 700;
    @media(max-width: 500px){
        font-size: 15px;
    }
`
const NotActiveSubmitUserDataFormButton = styled.input`
    background-color: #78797c;
    color: white;
    cursor: not-allowed;
    text-align: center;
    padding: 15px 0px;
    border: none;
    border-radius: 10px;
    outline: none;
    height: 50px;
    font-size: 20px;
    font-weight: 700;
    @media(max-width: 500px){
        font-size: 15px;
    }
`
const UnderFormDescription = styled.div`
    font-size: 14px;
    color: #78797c;
    margin-top: 15px;
`
const UnderlineDescriptionText = styled(Link)`
    font-size: 14px;
    color: #78797c;
    
`



export default UserFormModal;