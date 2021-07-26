import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: white; 
  color: #3D0B37;
  width: 300px;
  font-size: 1.5rem;
`;

function Button(props) {
    return (
        <StyledButton onClick={props.action}>{props.buttonText}</StyledButton>
    )
}

export default Button;