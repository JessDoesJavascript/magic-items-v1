import styled from 'styled-components'
import objectUse from '../../data/objectUse'
import RadioButtonAndLabel from './RadioButtonAndLabel'

const StyledItemTypeFilter = styled.div``;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: flex-start; 
`;

const SelectedFilterStyling = {
    "cursor": "pointer",
    "letterSpacing": "2px"
};

const UnselectedFilterStyling = {
    "cursor": "pointer",
    "letterSpacing": "2px"
};

function ItemTypeFilter(props) {
    const objectTypes = objectUse();
    return (
        <StyledItemTypeFilter>
            <StyledFieldset>
                <legend>What type of item would you like?</legend>
                <RadioButtonAndLabel
                    category="objectType"
                    value="showAllTypes"
                    handleItemTypeChange={props.handleItemTypeChange}
                    objectType=""
                    labelText="Show All"
                    styling={(props.objectType === "" || props.objectType === "showAll") ? SelectedFilterStyling : UnselectedFilterStyling}
                />
                {objectTypes.map(type =>
                    <RadioButtonAndLabel
                        key={type}
                        category="objectType"
                        value={type}
                        handleItemTypeChange={props.handleItemTypeChange}
                        objectType={type}
                        labelText={type}
                        type={props.objectType}
                        styling={(props.objectType === type) ? SelectedFilterStyling : UnselectedFilterStyling}
                    />
                )}
            </StyledFieldset>
        </StyledItemTypeFilter>
    )
}

export default ItemTypeFilter;