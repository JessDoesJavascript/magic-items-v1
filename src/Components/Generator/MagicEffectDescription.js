import styled from "styled-components";
import { SwitchTransition } from "react-transition-group";
import { CSSTransition } from "react-transition-group";

const MagicEffectDescriptionContainer = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0);
`;

const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: rgba(255, 255, 255, 0);
`;

const StyledP = styled.p`
  width: 300px;
  background-color: rgba(255, 255, 255, 0);
  &.fade-in-enter {
    opacity: 0;
    transition: opacity 100ms linear;
  }
  &.fade-in-enter-active {
    opacity: 1;
    transition: opacity 100ms linear;
  }

  &.fade-in-exit {
    opacity: 1;
    transition: opacity 100ms linear;
  }
  &.fade-in-exit-active {
    opacity: 0;
    transition: opacity 100ms linear;
  }
`;

function MagicEffectDescription(props) {
  return (
    <MagicEffectDescriptionContainer>
      <StyledDescriptionContainer>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={props.magicItemDescription}
            classNames="fade-in"
            timeout={200}
          >
            <StyledP> {props.magicItemDescription} </StyledP>
          </CSSTransition>
        </SwitchTransition>
      </StyledDescriptionContainer>
    </MagicEffectDescriptionContainer>
  );
}

export default MagicEffectDescription;
