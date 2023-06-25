import styled from "styled-components";


interface Props{
    buttonText: string;
    changeModalFlag?: (flag: boolean)=> void;
}

function ContactButton({buttonText, changeModalFlag}:Props){
    return(
        <Root onClick={()=> changeModalFlag ? changeModalFlag(true) : null}>
            {buttonText}
        </Root>
    )
}

const Root = styled.button`
    background-color: white;
    font-family: 'Muller';
    font-size: 19px;
    padding: 15px 25px;
    border-radius: 13px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    position: relative;
    width: 100%;
`



export default ContactButton;