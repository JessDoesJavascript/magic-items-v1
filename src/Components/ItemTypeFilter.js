import styled from 'styled-components'
import objectUse from '../data/objectUse'

const StyledItemTypeFilter = styled.div``;

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
};

const UnselectedFilterStyling = {
    "cursor": "pointer",
    "borderBottom": "solid 1px rgba(255, 255, 255, 0)",
    "letterSpacing": "2px"
};

function ItemTypeFilter(props) {
    const objectTypes = objectUse();
    return (
        <StyledItemTypeFilter>
            <StyledFieldset>
                <legend>What type of item would you like?</legend>
                <ButtonAndLabelContainer>
                    <StyledRadioButton
                        type="radio" name="objectType" value="showAll" id="showAll"
                        onClick={props.handleItemTypeChange} />
                    <StyledLabel
                        htmlFor="showAll"
                        style={(props.objectType === "" || props.objectType === "showAll") ? SelectedFilterStyling : UnselectedFilterStyling}>
                        All
                    </StyledLabel>
                </ButtonAndLabelContainer>
                {objectTypes.map(type =>
                    <ButtonAndLabelContainer key={type}>
                        <StyledRadioButton
                            type="radio" name="objectType" value={type} id={type}
                            onClick={props.handleItemTypeChange} />
                        <StyledLabel
                            htmlFor={type}
                            style={props.objectType === type ? SelectedFilterStyling : UnselectedFilterStyling}>
                            {type}
                        </StyledLabel>
                    </ButtonAndLabelContainer>
                )}

            </StyledFieldset>
        </StyledItemTypeFilter>

    )
}



export default ItemTypeFilter;