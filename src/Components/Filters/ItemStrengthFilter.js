import styled from 'styled-components';
import effectType from '../../data/effectType.json';
import RadioButtonAndLabel from './RadioButtonAndLabel';

const StyledItemStrengthFilterContainer = styled.div``;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: flex-start; 
`;

const ButtonAndLabelContainer = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center; 
`;

const SelectedFilterStyling = {
  "cursor": "pointer",
  "letterSpacing": "2px"
}

const UnselectedFilterStyling = {
  "cursor": "pointer",
  "letterSpacing": "2px"
}

function ItemStrengthFilter(props) {
  const effectTypes = effectType.effectTypes;
  return (
    <StyledItemStrengthFilterContainer>
      <StyledFieldset>
        <legend>How strong would you like your item?</legend>
        <ButtonAndLabelContainer>
          <RadioButtonAndLabel
            category="itemStrength"
            value="showAllStrengths"
            handleItemTypeChange={props.handleItemStrengthChange}
            itemStrength=""
            labelText="Show All"
            styling={(props.itemStrength === "" || props.itemStrength === "showAllStrengths") ? SelectedFilterStyling : UnselectedFilterStyling}
          />
        </ButtonAndLabelContainer>
        {effectTypes.map(effect =>
          <RadioButtonAndLabel
            category="itemStrength"
            key={effect.type}
            value={effect.type}
            handleItemTypeChange={props.handleItemStrengthChange}
            itemStrength={effect.type}
            labelText={effect.name}
            styling={(props.itemStrength === effect.type) ? SelectedFilterStyling : UnselectedFilterStyling}
          />
        )}
      </StyledFieldset>
    </StyledItemStrengthFilterContainer>
  )
}

export default ItemStrengthFilter;