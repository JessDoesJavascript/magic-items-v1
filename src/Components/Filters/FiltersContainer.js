import styled from 'styled-components';
import ItemStrengthFilter from './ItemStrengthFilter';
import ItemTypeFilter from './ItemTypeFilter';

const StyledFiltersContainer = styled.div``;

function FiltersContainer(props) {
    return (
        <StyledFiltersContainer data-testid="filtersContainerID">
            <ItemStrengthFilter
                handleItemStrengthChange={props.handleItemStrengthChange}
                itemStrength={props.itemStrength} />
            <ItemTypeFilter
                handleItemTypeChange={props.handleItemTypeChange}
                objectType={props.objectType} />
        </StyledFiltersContainer>
    )
}

export default FiltersContainer;