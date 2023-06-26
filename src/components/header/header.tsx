import styled from "styled-components";
import {HeaderLogoWrapper} from "./headerLogoWrapper";
import {HeaderContactInformation} from "./headerContactInformation";


interface Props{
    backgroundColor?: string;
}


function Header({backgroundColor}:Props){
    return(
        <>
            <ExternalWrapper backgroundColor={backgroundColor}>
                <HeaderLogoWrapper/>
                <HeaderContactInformation/>
            </ExternalWrapper>
        </>
    )
}


interface IExternalWrapper {
    backgroundColor?: string;
}


const ExternalWrapper = styled.div<IExternalWrapper>`
    padding: 40px 200px;
    display: flex;
    z-index: 3;
    align-items: center;
    background-color: ${props=>props.backgroundColor || 'none'};
    position: relative;
    justify-content: space-between;
    @media(max-width: 1500px){
        padding: 40px 100px;
    }
    @media(max-width: 1100px){
        padding: 40px 50px;
    }
    @media(max-width: 600px){
        padding: 40px 30px;
    }
`


export default Header;