import styled from 'styled-components';
import effectType from '../data/effectType.json';


const StyledItemStrengthFilterContainer = styled.div`

`;


const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: flex-start; 
  
`;

const StyledRadioButton = styled.input`
  appearance: none; 
  width: 20px;
  height: 20px; 
  background-color: white; 
  border-radius: 10px;
  align-self: flex-start;
  :checked {
    border: solid 2px white;
    background: #3D0B37; 
  }
`;

const StyledLabel = styled.label`
    border-bottom: solid 2px #3D0B37;
    margin-left: 10px;
    padding: 1px; 
  
`;
const ButtonAndLabelContainer = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center; 
`;

const SelectedFilterStyling = {
  "cursor": "pointer",
  "borderBottom": "solid 1px white",
  "letterSpacing": "2px"
}

const UnselectedFilterStyling = {
  "cursor": "pointer",
  "borderBottom": "solid 1px rgba(255, 255, 255, 0)",
  "letterSpacing": "2px"
}

function ItemStrengthFilter(props) {
  const effectTypes = effectType.effectTypes;
  return (
    <StyledItemStrengthFilterContainer>
      <StyledFieldset>
        <legend>How strong would you like your item?</legend>
        <ButtonAndLabelContainer>
          <StyledRadioButton
            type="radio" name="itemStrength" value="showAll" id="showAll"
            onClick={props.handleItemStrengthChange} />
          <StyledLabel
            htmlFor="showAll"
            style={(props.itemStrength === "" || props.itemStrength === "showAll") ? SelectedFilterStyling : UnselectedFilterStyling}>
            All
          </StyledLabel>
        </ButtonAndLabelContainer>
        {effectTypes.map(effect =>
          <ButtonAndLabelContainer key={effect.type}>
            <StyledRadioButton
              type="radio" name="itemStrength" value={effect.type} id={effect.type}
              onClick={props.handleItemStrengthChange} />
            <StyledLabel
              htmlFor={effect.type}
              style={(props.itemStrength === effect.type) ? SelectedFilterStyling : UnselectedFilterStyling}>
              {effect.name}
            </StyledLabel>
          </ButtonAndLabelContainer>
        )}
      </StyledFieldset>
    </StyledItemStrengthFilterContainer>
  )
}

export default ItemStrengthFilter;