import styled from "styled-components";
import Header from "../../ui/header/header";
import React, {useEffect, useState} from "react";
import Offer from "../../components/offer/offer";
import UserFormModal from "../../components/modal/userFormModal/userFormModal";
import SuccessModal from "../../components/modal/successModal/successModal";


interface Props{

}


function WelcomePage({}:Props){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [modalWindowFlag, setModalWindowFlag] = useState(false);
    const [successModalWindowFlag, setSuccessModalWindowFlag] = useState(false);

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
        <>
            {
                !modalWindowFlag ?
                    null
                    :
                    successModalWindowFlag ?
                        <SuccessModal changeModalSuccessFlag={setSuccessModalWindowFlag} changeModalFlag={setModalWindowFlag}/>
                        :
                        <UserFormModal changeModalSuccessFlag={setSuccessModalWindowFlag} changeModalFlag={setModalWindowFlag}/>
            }
            <ExternalWrapper windowWidth={windowWidth}>
                <Header windowWidth={windowWidth}/>
                <MainContent>
                    <Offer changeModalFlag={setModalWindowFlag}/>
                </MainContent>
            </ExternalWrapper>
        </>
    )
}



interface IExternalWrapper{
    windowWidth: number;
}


const ExternalWrapper = styled.div<IExternalWrapper>`
    background-color: #151922;
    background: url('./images/${props=> props.windowWidth >= 700 ? "desktopBackground" : "mobileBackground"}.png');
    height: 100%;
    width: 100%;
    position: absolute;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
`

const MainContent = styled.div`
    padding: 50px 200px;   
    @media(max-width: 1500px){
        padding: 50px 150px;
    }
    @media(max-width: 1260px){
        padding: 50px 100px;
    }
    @media(max-width: 750px){
        padding: 20px 0px;
    }
    @media(max-width: 750px){
        width: 500px;
        margin: 0 auto;
    }
    @media(max-width: 550px){
        width: 450px;
    }
    @media(max-width: 500px){
        width: 400px;
    }
    @media(max-width: 450px){
      width: 320px;
    }
`


export default WelcomePage;