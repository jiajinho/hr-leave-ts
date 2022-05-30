import React from 'react';
import styled from 'styled-components/macro';

export const Wrapper = styled.svg`
  aspect-ratio: 6/22;
  height: auto;
  width: auto;
`;

export default ({ color = "black" }: {
  color?: string
}) => (
  <Wrapper
    width={6} height={22}
    viewBox="0 0 6 22"
  >
    <circle fill={color} cx="2.54297" cy="19.0469" r="2.5" transform="rotate(-90 2.54297 19.0469)" />
    <circle fill={color} cx="2.54297" cy="11.0469" r="2.5" transform="rotate(-90 2.54297 11.0469)" />
    <circle fill={color} cx="2.54297" cy="3.04688" r="2.5" transform="rotate(-90 2.54297 3.04688)" />
  </Wrapper>
)