import React from 'react';
import styled from 'styled-components/macro';

export const Wrapper = styled.svg`
  aspect-ratio: 1/1;
  height: auto;
  width: auto;
`;

const Mail = ({ color = "white" }) => (
  <Wrapper
    width={29} height={29}
    viewBox="0 0 29 29"
    fill="none"
  >
    <path fill={color} d="M27.9528 6.54155C27.8388 5.77931 27.4554 5.08315 26.8722 4.57926C26.289 4.07537 25.5446 3.79711 24.7739 3.79492H4.97966C4.20894 3.79711 3.46452 4.07537 2.88133 4.57926C2.29814 5.08315 1.9148 5.77931 1.80078 6.54155L14.8768 15.0028L27.9528 6.54155Z" />
    <path fill={color} d="M15.3501 16.7794C15.2086 16.8709 15.0436 16.9196 14.875 16.9196C14.7064 16.9196 14.5414 16.8709 14.3999 16.7794L1.75 8.59463V21.5665C1.75093 22.4223 2.0913 23.2428 2.69645 23.8479C3.30159 24.4531 4.12207 24.7934 4.97788 24.7944H24.7721C25.6279 24.7934 26.4484 24.4531 27.0536 23.8479C27.6587 23.2428 27.9991 22.4223 28 21.5665V8.59375L15.3501 16.7794Z" />
  </Wrapper>
);

export default Mail;