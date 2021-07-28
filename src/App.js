import { React, useState } from 'react'
import styled from 'styled-components';
import objectDecider from './utils/objectDecider'
import About from './Components/About';
import GeneratorContainer from './Components/GeneratorContainer';
import ButtonContainer from './Components/ButtonContainer';
import FiltersContainer from './Components/Filters/FiltersContainer';
import descriptionWriter from './utils/descriptionWriter';

const StyledApp = styled.div`
  background: rgb(255,255,255);
  background: radial-gradient(
                rgba(255,255,255,0.15) 0%,   
                rgba(255,255,255,0.1) 50%, 
                rgba(255,255,255,0) 100%);
  color: white;
  width: 100%;
  font-family: 'Viaoda Libre', cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center; 
`;

function App() {
    const [objectType, setObjectType] = useState('');
    const [itemStrength, setItemStrength] = useState('');
    const [magicItem, setMagicItem] = useState('Click "Inspire Me" to generate a magic item!');
    const [magicItemDescription, setMagicItemDescription] = useState('');
    const [descriptionShown, setDescriptionShown] = useState(false);
    const [aboutShown, setAboutShown] = useState(false);
    
    const newWordGenerator = () => {
      let object = objectDecider(objectType);
      const nameAndDescription = descriptionWriter(object.name, object.use, object.plural, itemStrength)
      let description = nameAndDescription.description;
      setMagicItem(nameAndDescription.item)
      setMagicItemDescription(description)
  }
  return (
    <StyledApp>
        <h1> Welcome to Aerith Pastina's Magic Item Workshop </h1>
        <About 
          aboutShown={aboutShown} 
          handleAboutShown={() => setAboutShown(!aboutShown)} />
        <GeneratorContainer 
          magicItem={magicItem}
          magicItemDescription={magicItemDescription} 
          descriptionShown={descriptionShown} />
        <ButtonContainer 
          generateWord={newWordGenerator} 
          toggleDescription={() => setDescriptionShown(!descriptionShown)} />
        <FiltersContainer 
          handleItemStrengthChange={(e) => setItemStrength(e.target.value)} 
          itemStrength={itemStrength} 
          handleItemTypeChange={(e) => setObjectType(e.target.value)} 
          objectType={objectType} />
    </StyledApp>
  );
}

export default App;