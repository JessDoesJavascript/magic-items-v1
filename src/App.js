import React from 'react'
import styled from 'styled-components';
import richObjects from './data/richObjects.json';
import richDescriptions from './data/richDescriptions.json';
import adjectives from './data/adjectives.json';
import effectType from './data/effectType.json';


const StyledApp = styled.div`
  background-color: #3D0B37;
  color: white;
  width: 100%;
  font-family: 'Viaoda Libre', cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center; 
`;

const StyledH2 = styled.h2`
  font-size: 2rem; 
  letter-spacing: 2px; 
`;

const AboutContainer = styled.div``;

const AboutButton = styled.button`
  background-color: white; 
  color: #3D0B37;
  font-size: 1.5rem;`;

const StyledP = styled.p`
  width: 300px;

`;

const StyledGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 270px;
`;

const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledFilterContainer = styled.div``;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: flex-start; 
  
`;


const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
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


const StyledButton = styled.button`
  background-color: white; 
  color: #3D0B37;
  width: 300px;
  font-size: 1.5rem;
`;

const SelectedFilterStyling = {
  "cursor": "pointer",
  "letterSpacing": "2px",
  "borderBottom": "solid 2px white",
  "letterSpacing": "2px" 
}

const UnselectedFilterStyling = {
  "cursor": "pointer",
  "borderBottom": "solid 2px #3D0B37",
  "letterSpacing": "2px" 
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      magicItems: [],
      determiner: "",
      adjective: "",
      objectName: "",
      objectType: "",
      objectUse: "",
      effect: "",
      grantOrGrants: "",
      skillType: "",
      check: "",
      magicItem: "",
      magicItemDescription: "",
      descriptionShown: false,
      itemStrength: "",
      isFilterSelected: true,
      aboutShown: false
      
    }
    this.toggleDescription = this.toggleDescription.bind(this);
    this.newWordGenerator = this.newWordGenerator.bind(this);
    this.randomNumber = this.randomNumber.bind(this);
    this.objectDecider = this.objectDecider.bind(this);
  
  }
  toggleDescription(e) {
    e.preventDefault();
    this.setState({
      descriptionShown: !this.state.descriptionShown
    })
  }

  strengthDecider() {
    if (this.state.itemStrength === "" || this.state.itemStrength === "showAll") {
      return effectType.effectTypes[this.randomNumber(effectType.effectTypes.length)].effect;
    } else {
      return effectType.effectTypes.filter(effect => effect.type === this.state.itemStrength)[0].effect
    }
   
  }
  //Random number generator
  randomNumber(num) {
    return Math.trunc(Math.random() * num)
  }
  consoleLog = () => {
    console.log(this.state)
  }
  objectDecider() {
    if (this.state.objectType === "" || this.state.objectType === "showAll") {
      return richObjects.objectsByName[this.randomNumber(richObjects.objectsByName.length)]
    } else {
      let arrayOfObjects = richObjects.objectsByName.filter(object => object.use === this.state.objectType)
      return arrayOfObjects[this.randomNumber(arrayOfObjects.length)]
    }
  }
  newWordGenerator() {
    const adjective = adjectives.adjectives[this.randomNumber(adjectives.adjectives.length)]
    let object = this.objectDecider();
    let objectName = object.name;
    let objectUse = object.use;
    let objectPlural = object.plural;

    let determinerWorker = (adj, objectPlural) => {
      if (objectPlural === "yes") {
        return "A set of"
      } else {
      let firstChar = adj.charAt(0);
      if (firstChar === "a" || firstChar === "e" || firstChar === "i" || firstChar === "o" || firstChar === "u") {
        return "An"
    } else {
      return "A"
    }}}
    let determiner = determinerWorker(adjective, objectPlural)
    let pluraliser = (objectPlural) => {
      if (objectPlural === "no") {
        return "grants"
      } else {
        return "grant"
      }
    }
    let checkDecider = () => {
      if (selectedWord.type === "save") {
        return "saves"
      } else if (selectedWord.type === "skillCheck") {
        return "checks"
      } else {
        return "dice roll"
      }
    }

    let describingWordDecider = this.randomNumber(richDescriptions.descriptions.length);
    let selectedWord = richDescriptions.descriptions[describingWordDecider];
    let describingWord = selectedWord.word;
    let skillType = (selectedWord.skill === "" ? "a single" : selectedWord.skill);
    let grantOrGrants = pluraliser(object.plural);
    let check = checkDecider()
    
    
    let effect = this.strengthDecider();

    this.setState({ determiner, adjective, objectName, objectUse, describingWord, effect, skillType, check, grantOrGrants,
                    magicItem: "the " + objectName + " of " + describingWord,
                    magicItemDescription: determiner + " " + adjective + " " + objectName + " that " + grantOrGrants + " " + effect + " to " + skillType + " " + check + " when " + objectUse + "."}, 
                    function () {
                      console.log(this.state)
                    })
                  }
  handleAboutShown = (e) => {
    this.setState({ aboutShown: !this.state.aboutShown })
  }
        
  // Filters
  handleItemStrengthChange = (e) => {
    this.setState({ itemStrength: e.target.value })
  }
  handleItemTypeChange = (e) => {
    this.setState({ objectType: e.target.value})
  }

  
  render() {
  return (
    <StyledApp>
        <h1> Welcome to Aerith Pastina's Magic Item Workshop </h1>
        <AboutContainer>
        <AboutButton onClick={this.handleAboutShown}> About </AboutButton>
        {this.state.aboutShown ?  <div><StyledP>
          This is a very simple random magic item generator. 
          It's purpose is not to generate fully fleshed out items, 
          but to inspire you when you are struggling to create your own. 
          The suggestions you get may be sensible or silly, and you can view a suggested magic effect as well. I hope you enjoy using it. 
        </StyledP> 
        <StyledP>
        If you like this generator, or you've created something cool with it, 
        I'd love to hear about it. My twitter handle is @JessDoesJS. 
      </StyledP> 
      </div> : null }
       
        </AboutContainer>
        <StyledGeneratorContainer>
          <StyledH2>{this.state.magicItem}</StyledH2>
        { this.state.descriptionShown ? 
          <StyledDescriptionContainer>
            <StyledP>{this.state.magicItemDescription}</StyledP>
          </StyledDescriptionContainer> : null }
       </StyledGeneratorContainer>
       <StyledButtonContainer>
          <StyledButton onClick={(e) => this.newWordGenerator()}> Inspire me! </StyledButton>
          <StyledButton onClick={this.toggleDescription}>Show/Hide Magical Effect</StyledButton>
        </StyledButtonContainer>
       <StyledFilterContainer>
       <StyledFieldset>
              <legend>How strong would you like your item?</legend>
                <ButtonAndLabelContainer>
                  <StyledRadioButton 
                    type="radio" name="itemStrength" value="showAll" id="showAllStrengths" 
                    onClick={this.handleItemStrengthChange} />
                  <StyledLabel 
                    htmlFor="showAllStrengths" 
                    style={(this.state.itemStrength === "" || this.state.itemStrength === "showAll") ? SelectedFilterStyling : UnselectedFilterStyling}>
                    View All
                  </StyledLabel>
                </ButtonAndLabelContainer>

                <ButtonAndLabelContainer>  
                  <StyledRadioButton
                    type="radio" name="itemStrength" value="common" id="common" 
                    onClick={this.handleItemStrengthChange} />
                  <StyledLabel 
                    htmlFor="common" 
                    style={(this.state.itemStrength === "common") ? SelectedFilterStyling : UnselectedFilterStyling}>
                    Common
                  </StyledLabel>
                </ButtonAndLabelContainer>

                <ButtonAndLabelContainer>
                  <StyledRadioButton 
                    type="radio" name="itemStrength" value="uncommon" id="uncommon" 
                    onClick={this.handleItemStrengthChange} />
                  <StyledLabel 
                    htmlFor="uncommon"
                    style={(this.state.itemStrength === "uncommon") ? SelectedFilterStyling : UnselectedFilterStyling}>
                    Uncommon
                  </StyledLabel>
                </ButtonAndLabelContainer>

                <ButtonAndLabelContainer>
                  <StyledRadioButton 
                    type="radio" name="itemStrength" value="rare" id="rare" 
                    onClick={this.handleItemStrengthChange} />
                  <StyledLabel 
                    htmlFor="rare"
                    style={(this.state.itemStrength === "rare") ? SelectedFilterStyling : UnselectedFilterStyling}>
                    Rare
                  </StyledLabel>
                </ButtonAndLabelContainer>
                
                <ButtonAndLabelContainer>
                  <StyledRadioButton
                    type="radio" name="itemStrength" value="veryRare" id="veryRare" 
                    onClick={this.handleItemStrengthChange} />
                  <StyledLabel 
                    htmlFor="veryRare"
                    style={(this.state.itemStrength === "veryRare") ? SelectedFilterStyling : UnselectedFilterStyling}>
                    Very Rare
                  </StyledLabel>
                </ButtonAndLabelContainer>

                <ButtonAndLabelContainer>
                  <StyledRadioButton 
                    type="radio" name="itemStrength" value="legendary" id="legendary" 
                    onClick={this.handleItemStrengthChange} />
                  <StyledLabel 
                    htmlFor="legendary"
                    style={(this.state.itemStrength === "legendary") ? SelectedFilterStyling : UnselectedFilterStyling}>
                    Legendary
                  </StyledLabel>
                </ButtonAndLabelContainer>
            </StyledFieldset>
            <StyledFieldset>
              <legend>What type of item would you like?</legend>
                <ButtonAndLabelContainer>
                  <StyledRadioButton 
                    type="radio" name="itemType" value="showAll" id="showAllTypes" 
                    onClick={this.handleItemTypeChange}/>
                    <StyledLabel 
                      htmlFor="showAllTypes"
                      style={(this.state.objectType === "" || this.state.objectType === "showAll") ? SelectedFilterStyling : UnselectedFilterStyling}>
                      All
                    </StyledLabel>
                </ButtonAndLabelContainer>

                {/* <ButtonAndLabelContainer>
                  <StyledRadioButton 
                    type="radio" name="itemType" value="weapon" id="weapon" 
                    onClick={this.handleItemTypeChange}/>
                    <StyledLabel 
                      htmlFor="weapon">
                      Something for combat
                    </StyledLabel>
                </ButtonAndLabelContainer> */}
                 
                <ButtonAndLabelContainer> 
                  <StyledRadioButton 
                    type="radio" name="itemType" value="held" id="held" 
                    onClick={this.handleItemTypeChange}/>
                    <StyledLabel 
                      htmlFor="held"
                      style={(this.state.objectType === "held") ? SelectedFilterStyling : UnselectedFilterStyling}>
                     Something to hold
                    </StyledLabel>
                </ButtonAndLabelContainer>  
                  
                <ButtonAndLabelContainer>  
                  <StyledRadioButton 
                    type="radio" name="itemType" value="worn" id="worn" 
                    onClick={this.handleItemTypeChange}/>
                    <StyledLabel 
                      htmlFor="worn"
                      style={(this.state.objectType === "worn") ? SelectedFilterStyling : UnselectedFilterStyling}>
                      Something to wear
                    </StyledLabel>
                </ButtonAndLabelContainer> 
                 
                <ButtonAndLabelContainer> 
                  <StyledRadioButton 
                    type="radio" name="itemType" value="played" id="played" 
                    onClick={this.handleItemTypeChange}/>
                    <StyledLabel 
                      htmlFor="played"
                      style={(this.state.objectType === "played") ? SelectedFilterStyling : UnselectedFilterStyling}>
                      Something to play</StyledLabel>
                </ButtonAndLabelContainer>
           
            </StyledFieldset> 
       </StyledFilterContainer>
    </StyledApp>
  );
}}

export default App;
