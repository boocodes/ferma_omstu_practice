import styled from "styled-components";




interface Props{

}



function HeaderLogoWrapper(props:Props){
    return(
        <ExternalWrapper>
            <FermaLogoIcon src={"./images/fermaLogo.svg"}/>
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
`
const FermaLogoSubText = styled.p`
    font-family: 'Muller';
    color: white;
    font-size: 20px;
`




export default HeaderLogoWrapper;