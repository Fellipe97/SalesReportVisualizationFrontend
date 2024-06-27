// Spinner.tsx
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  border: 6px solid ${(props) => props.theme.colors['gray-200']}; 
  border-top: 6px solid ${(props) => props.theme.colors['blue-600']};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${rotate} 2s linear infinite;
`;

