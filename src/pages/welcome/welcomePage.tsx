import styled from "styled-components";
import {useEffect, useState} from "react";
import {SuccessModal,
        UserFormModal,
        Header,
        Offer,
} from '../../';

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



    console.log(modalWindowFlag)


    return (
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
                <Header changeModalFlag={setModalWindowFlag} windowWidth={windowWidth}/>
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
    background: url('./images/${props=> props.windowWidth <= 700 ? "mobileBackground" : props.windowWidth <= 1200 ? "laptopBackground" : "desktopBackground"}.png');
    height: 100%;
    width: 100%;
    position: absolute;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @media(max-width: 400px){
        background-position: 
    }
    
`
const MainContent = styled.div`
    padding-left: 204px;
    @media(max-width: 1440px){
        padding-left: 134px;
    }
    @media(max-width: 1200px){
        padding-left: 60px;
    }
    @media(max-width: 850px){
        padding-left: 30px;
        padding-right: 30px;
    }
    @media(max-width: 510px){
        padding-left: 20px;
        padding-right: 20px;
    }
`



export default WelcomePage;