import styled from "styled-components";
import {Link} from "react-router-dom";




interface Props{

}



function HeaderLogoWrapper({}:Props){
    return(
        <ExternalWrapper>
            <Link to={"/"}>
                <FermaLogoIcon src={"./images/fermaLogo.svg"}/>
            </Link>
            <FermaLogoSubText>
                рекламное<br/>
                агенство
            </FermaLogoSubText>
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    display: flex;
    align-items: flex-end;
`
const FermaLogoIcon = styled.img`
    margin-right: 10px;
    @media(max-width: 800px){
        width: 70px;
    }
    
`
const FermaLogoSubText = styled.p`
    font-family: 'Muller';
    color: white;
    font-size: 15px;
    @media(max-width: 800px){
        margin-bottom: 2px;
        font-size: 12px;
    }
`




export default HeaderLogoWrapper;