import styled from 'styled-components';
import { React, useState } from 'react';

const AboutContainer = styled.div``;

const AboutButton = styled.button`
  background-color: white; 
  color: #3D0B37;
  font-size: 1.5rem;`;

const StyledP = styled.p`
  width: 300px;
`;

function About() {
  const [aboutShown, setAboutShown] = useState(false);
  return (
    <AboutContainer data-testid="aboutSectionRender">
      <AboutButton onClick={() => setAboutShown(!aboutShown)}> About </AboutButton>
      {aboutShown ?
        <div>
          <StyledP>
            This is a very simple random magic item generator.
            It's purpose is not to generate fully fleshed out items,
            but to inspire you when you are struggling to create your own.
            The suggestions you get may be sensible or silly, and you
            can view a suggested magic effect as well. I hope you enjoy using it.
          </StyledP>
          <StyledP>
            If you like this generator, or you've created something cool with it,
            I'd love to hear about it. My twitter handle is @JessDoesJS.
          </StyledP>
        </div>
        : null}
    </AboutContainer>
  )
}

export default About;