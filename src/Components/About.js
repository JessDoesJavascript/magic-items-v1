import { React, useState } from "react";
import styled from "styled-components";

import { CSSTransition } from "react-transition-group";

const AboutContainer = styled.div``;

const StyledDiv = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  &.fade-in-enter {
    opacity: 0;
  }
  &.fade-in-enter-active {
    opacity: 1;
    transition: opacity 100ms;
  }
  &.fade-in-exit {
    opacity: 1;
  }
  &.fade-in-exit-active {
    opacity: 0;
    transition: opacity 100ms;
  }
`;

const StyledCard = styled.div`
  position: absolute;
  width: 300px;
  border-radius: 2px;
  box-shadow: 0px 5px 20px 10px rgba(0, 0, 0, 0.25);
  background: #3d0b37;
`;

const AboutButton = styled.button`
  background-color: white;
  color: #3d0b37;
  font-size: 1.5rem;
  :hover {
    cursor: pointer;
  }
`;

const CloseButton = styled.button`
  color: white;
  background-color: #3d0b37;
  border: none;
  font-family: sans-serif;
  font-size: 1.2rem;
  font-weight: 100;
  margin: 5px;
  position: absolute;
  bottom: 345px;
  left: 265px;
  :hover {
    cursor: pointer;
  }
`;

const AboutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const StyledP = styled.p``;

function About() {
  const [aboutShown, setAboutShown] = useState(false);

  const doNothing = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <AboutContainer data-testid="aboutSectionRender">
      <AboutButton onClick={() => setAboutShown(!aboutShown)}>
        About
      </AboutButton>

      <CSSTransition
        in={aboutShown}
        timeout={100}
        classNames="fade-in"
        unmountOnExit
        appear
      >
        <StyledDiv onClick={() => setAboutShown(!aboutShown)}>
          <StyledCard onClick={doNothing}>
            <AboutInfoContainer>
              <CloseButton onClick={() => setAboutShown(!aboutShown)}>
                X
              </CloseButton>
              <StyledP>
                This is a very simple random magic item generator. It's purpose
                is not to generate fully fleshed out items, but to inspire you
                when you are struggling to create your own. The suggestions you
                get may be sensible or silly, and you can view a suggested magic
                effect as well. I hope you enjoy using it.
              </StyledP>
              <StyledP>
                If you like this generator, or you've created something cool
                with it, I'd love to hear about it. My twitter handle is
                @JessDoesJS.
              </StyledP>
            </AboutInfoContainer>
          </StyledCard>
        </StyledDiv>
      </CSSTransition>
    </AboutContainer>
  );
}

export default About;
