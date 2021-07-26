import styled from 'styled-components'

const MagicEffectDescriptionContainer = styled.div`
    height: 100px; 
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center;
    background-color: rgba(255, 255, 255, 0)
`;

const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: rgba(255, 255, 255, 0)
`;

const StyledP = styled.p`
  width: 300px;
  background-color: rgba(255, 255, 255, 0)
`;

function MagicEffectDescription(props) {
  return (
    <MagicEffectDescriptionContainer>
      <StyledDescriptionContainer>
        <StyledP> {props.magicItemDescription} </StyledP>
      </StyledDescriptionContainer>

    </MagicEffectDescriptionContainer>
  )
}

export default MagicEffectDescription;