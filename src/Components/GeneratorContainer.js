import styled from "styled-components";
import MagicItem from './MagicItem';
import MagicEffectDescription from './MagicEffectDescription'

const StyledGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 250px;
`;

function GeneratorContainer(props) {
    return(
        <StyledGeneratorContainer data-testid="generatorSectionRender">
        <MagicItem magicItem={props.magicItem}/>
         { props.descriptionShown ? 
            <MagicEffectDescription  
              magicItemDescription={props.magicItemDescription} 
              descriptionShown={props.descriptionShown} /> 
              : null 
         } 
       </StyledGeneratorContainer>
    )
}

export default GeneratorContainer; 