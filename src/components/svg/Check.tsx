import React from 'react';
import styled from 'styled-components/macro';

export const Wrapper = styled.svg`
  aspect-ratio: 1/1;
  height: 10rem;
  width: auto;
`;

export default ({ color = "black" }: {
  color?: string
}) => {
  return (
    <Wrapper
      x="0px" y="0px"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
    >
      <g>
        <polygon fill={color} points="11.941,28.877 0,16.935 5.695,11.24 11.941,17.486 26.305,3.123 32,8.818 			" />
      </g>
    </Wrapper>
  );
}