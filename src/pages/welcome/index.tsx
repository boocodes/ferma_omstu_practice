import styled from "styled-components";
import Header from '../../components/header/';
import {OfferComponent} from "../../components";
import {useState} from "react";
import {UserDataFormModal} from "../../components/modal";


interface Props{

}




function WelcomePage(props:Props){

    const [modalWindowFlag, setModalWindowFlag] = useState(false);

    return(
        <>
            {modalWindowFlag ? <UserDataFormModal changeModalWindowFlag={setModalWindowFlag}/> : null}
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
    
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    position: relative;
    background-position: 100% 20%;
    z-index: 1;
`

const BlackFadeBackgroundOverlay = styled.div`
    background: url('./images/welcomeBackgroundImageOverlay.png');
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
`

const MainContent = styled.div`
    padding: 0px 200px;
`





export default WelcomePage;