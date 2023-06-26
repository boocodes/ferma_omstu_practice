import styled from "styled-components";
import Header from '../../components/header/';
import {OfferComponent} from "../../components";
import {useState} from "react";
import {SuccessSendModal, UserDataFormModal} from "../../components/modal";


interface Props{

}

//<UserDataFormModal changeModalWindowFlag={setModalWindowFlag}/> : null


function WelcomePage(props:Props){

    const [modalWindowFlag, setModalWindowFlag] = useState(false);
    const [successSendFlag, setSuccessFlag] = useState(false);

    return(
        <>
            {!modalWindowFlag ?
                null
                :
                successSendFlag ?
                    <SuccessSendModal changeModalSuccessFlag={setSuccessFlag} changeModalWindowFlag={setModalWindowFlag}/>
                    :
                    <UserDataFormModal changeModalSuccessFlag={setSuccessFlag} changeModalWindowFlag={setModalWindowFlag}/>
            }
            <ExternalWrapper>
                <Header/>
                <MainContent>
                    <OfferComponent changeModalFlag={setModalWindowFlag}/>
                    <BackgroundImageWrapper/>
                    <BlackFadeBackgroundOverlay/>
                </MainContent>
            </ExternalWrapper>

        </>

    )
}

const ExternalWrapper = styled.div`
    
   
`

const BackgroundImageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: url('./images/welcomeBackground.png');
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-position: 100% 20%;
    z-index: 1;
    @media(max-width: 1100px){
        background-position: 100% 70%;
        top:50%;
        left:50%;
        transform:translate(-50%, -10%); 
        height: 100vh;
    }
    @media(max-width: 800px){
        background-position: 75% 70%;
    }
    
`



const BlackFadeBackgroundOverlay = styled.div`
    background: linear-gradient(89.43deg, #151922 16.15%, rgba(28, 29, 33, 0.5) 42.91%, rgba(28, 29, 33, 0) 69.66%);
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    height: 100vh;
    width: 100vw;
    @media(max-width: 1100px){
        background: linear-gradient(179.89deg, #151922 42.24%, rgba(28, 29, 33, 0.5) 65.54%, rgba(28, 29, 33, 0) 72.84%);
    }
    @media(max-width: 800px){
        height: 100vh;
    }
`

const MainContent = styled.div`
    padding: 0px 200px;
    @media(max-width: 1500px){
        padding: 0px 100px;
    }
    @media(max-width: 1100px){
        padding: 0px 50px;
    }
    @media(max-width: 600px){
        padding: 0px 30px;
    }
`





export default WelcomePage;