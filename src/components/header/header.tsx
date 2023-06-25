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
`


export default Header;