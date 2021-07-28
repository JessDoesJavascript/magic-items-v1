import styled from 'styled-components';

const ButtonAndLabelContainer = styled.div`
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledRadioButton = styled.input`
  margin: 3px;
  margin-right: 10px;
  appearance: none; 
  width: 20px;
  height: 20px; 
  background-color: white; 
  border-radius: 10px;
  :checked {
    border: solid 2px white;
    background: #3D0B37; 
  }
`;

function RadioButtonAndLabel(props) {
  return (
    <ButtonAndLabelContainer>
      <StyledLabel
        htmlFor={props.value}
        style={props.styling}
      >
        <StyledRadioButton
          type="radio"
          name={props.category}
          value={props.value}
          id={props.value}
          onClick={props.handleItemTypeChange}
        />
        {props.labelText}
      </StyledLabel>
    </ButtonAndLabelContainer>
  )
}
export default RadioButtonAndLabel;
