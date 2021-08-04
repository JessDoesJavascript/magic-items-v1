import styled from 'styled-components';
import Button from './Button';

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function ButtonContainer(props) {
  return (
    <StyledButtonContainer data-testid="buttonContainerID">
      <Button action={props.generateWord} buttonText="Inspire Me" />
      <Button action={props.toggleDescription} buttonText="Show/Hide Magical Effect" />
    </StyledButtonContainer>
  )
}

export default ButtonContainer;