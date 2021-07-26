import styled from 'styled-components';

const StyledMagicItemContainer = styled.div`
    background-color: rgba(255, 255, 255, 0)
`;

const StyledH2 = styled.h2`
  font-size: 2rem; 
  letter-spacing: 2px; 
  padding: 10px;
  background-color: rgba(255, 255, 255, 0)
`;

function MagicItem(props) {
    return (
        <StyledMagicItemContainer>
            <StyledH2>{props.magicItem}</StyledH2>
        </StyledMagicItemContainer>
    )
}

export default MagicItem