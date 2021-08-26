import styled from "styled-components";
import { SwitchTransition } from "react-transition-group";
import { CSSTransition } from "react-transition-group";

const StyledMagicItemContainer = styled.div`
  background-color: rgba(255, 255, 255, 0);
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  letter-spacing: 2px;
  padding: 10px;
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

function MagicItem(props) {
  return (
    <StyledMagicItemContainer>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={props.magicItem}
          classNames="fade-in"
          timeout={200}
        >
          <StyledH2 >{props.magicItem}</StyledH2>
        </CSSTransition>
      </SwitchTransition>
    </StyledMagicItemContainer>
  );
}

export default MagicItem;
