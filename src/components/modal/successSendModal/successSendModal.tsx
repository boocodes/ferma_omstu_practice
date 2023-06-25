import styled from "styled-components";


interface Props{
    changeModalWindowFlag: (flag: boolean) => void;
    changeModalSuccessFlag: (flag: boolean) => void;
}


function SuccessSendModal({changeModalWindowFlag, changeModalSuccessFlag}:Props){



    function closeModal(){
        changeModalWindowFlag(false);
        changeModalSuccessFlag(false);
    }



    return(
        <>
            <ExternalWrapper>
                <HeaderWrapper>
                    <CloseModalIcon onClick={closeModal} src={"./images/closeIcon.svg"}/>
                </HeaderWrapper>
                <MainContent>
                    <SuccessSendIcon src={"./images/successSendIcon.svg"}/>
                    <SuccessText>
                        Спасибо, что отправили заявку!<br/>
                        Мы с вами свяжемся в ближайшее время
                    </SuccessText>
                </MainContent>
            </ExternalWrapper>
            <Overlay onClick={closeModal}/>


        </>
    )
}


const ExternalWrapper = styled.div`
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    z-index: 5;
    background-color: white;
    border-radius: 20px;
    padding: 40px 40px 65px 50px;
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


const HeaderWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const CloseModalIcon = styled.img`
    cursor: pointer;
`

const MainContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: 'Muller';
`

const SuccessSendIcon = styled.img`
    margin-bottom: 40px;
`
const SuccessText = styled.p`
    text-align: center;
    font-size: 28px;
    font-weight: bold;
`






export default SuccessSendModal;