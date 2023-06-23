import styled from "styled-components";
import Header from '../../components/header/';
import {OfferComponent} from "../../components";



interface Props{

}




function WelcomePage(props:Props){
    return(
        <>
            <ExternalWrapper>
                <Header/>
                <OfferComponent/>
                <BlackFadeBackgroundOverlay></BlackFadeBackgroundOverlay>
            </ExternalWrapper>

        </>
    )
}

const ExternalWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url('./images/welcomeBackground.png');
    padding-left: 200px;
    padding-right: 200px;
    background-repeat: no-repeat;
    
    background-position: 100% 20%;
    z-index: 1;
`

const BackgroundImage = styled.div`
    
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






export default WelcomePage;