import React from 'react'
import styled from 'styled-components';
import objects from './data/objects.json';
import adjectives from './data/adjectives.json';
const presentParticiples = require('./data/presentParticiples')

 

const StyledApp = styled.div`
  background-color: #3D0B37;
  color: white;
  width: 100%;
  font-family: 'Viaoda Libre', cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center; 
`;

const StyledH2 = styled.h2`
  font-size: 2.5rem; 
  letter-spacing: 2px; 
`;

const StyledP = styled.p`
  width: 300px;
`;

const StyledGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 300px; 
`;

const StyledButton = styled.button`
  background-color: white; 
  color: #3D0B37;
  width: 300px;
  font-size: 1.5rem;
  
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      magicItems: [],
      adjective: "",
      object: "",
      effect: "",
      magicItem: ""
    }
  }
  newWordGenerator(e) {
    const adjective = adjectives.adjectives[Math.trunc(Math.random() * adjectives.adjectives.length)]

    const object = objects.objects[Math.trunc(Math.random() * objects.objects.length)]
    const numberOfWords = presentParticiples().length;
    let randomNumber = Math.trunc(Math.random() * numberOfWords);
    let effect = presentParticiples()[randomNumber];
    this.setState({ adjective, object, effect, magicItem: "the " + object + " of " + effect })
  }
  render() {
  return (
    <StyledApp>
        <h1> Welcome to Aerith Pastina's Magic Item Workshop </h1>
        <StyledP>This is a very simple random magic item generator. 
        It's purpose is not to generate fully fleshed out items, 
        but to inspire you when you are struggling to create your own. 
        The suggestions you get may be sensible or silly. I hope you enjoy using it. </StyledP>
     <StyledGeneratorContainer>
      
        <StyledH2>{this.state.magicItem}</StyledH2>
        <StyledButton onClick={(e) => this.newWordGenerator()}> Click here to generate a new magic item! </StyledButton>

     </StyledGeneratorContainer>
      <StyledP>If you like this generator, or you've created something cool with it, I'd love to hear about it. My twitter handle is @JessDoesJS. </StyledP>
    </StyledApp>
  );
}
}

export default App;
