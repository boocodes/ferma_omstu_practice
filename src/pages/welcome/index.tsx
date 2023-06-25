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
                    <BlackFadeBackgroundOverlay/>
                </MainContent>
            </ExternalWrapper>

        </>

    )
}

const ExternalWrapper = styled.div`
    background: url('./images/welcomeBackground.png');
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    position: relative;
    background-position: 100% 20%;
    z-index: 1;
`



const BlackFadeBackgroundOverlay = styled.div`
    background: url('./images/welcomeBackgroundImageOverlay.png');
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    height: 100vh;
    width: 100vw;
`

const MainContent = styled.div`
    padding: 0px 200px;
`





export default WelcomePage;