import styled from "styled-components";
import {HeaderLogoWrapper} from "./headerLogoWrapper";
import {HeaderContactInformation} from "./headerContactInformation";


interface Props{

}


function Header(props:Props){
    return(
        <>
            <ExternalWrapper>
                <HeaderLogoWrapper/>
                <HeaderContactInformation/>
            </ExternalWrapper>
        </>
    )
}

const ExternalWrapper = styled.div`
    padding: 40px 0px;
    display: flex;
    z-index: 3;
    align-items: center;
    position: relative;
    justify-content: space-between;
`


export default Header;