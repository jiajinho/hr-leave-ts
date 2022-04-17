import React from 'react';
import styled from 'styled-components/macro';

export const Wrapper = styled.svg`
  aspect-ratio: 1/1;
  height: auto;
  width: auto;
`;

export default ({ color = "black" }: {
  color?: string
}) => (
  <Wrapper
    width={33} height={33}
    viewBox="0 0 33 33"
  >
    <path fill={color} d="M16.4284 16.9427C20.1103 16.9427 23.0951 13.9579 23.0951 10.276C23.0951 6.59414 20.1103 3.60938 16.4284 3.60938C12.7465 3.60938 9.76172 6.59414 9.76172 10.276C9.76172 13.9579 12.7465 16.9427 16.4284 16.9427Z" />
    <path fill={color} d="M16.4286 20.2734C9.74859 20.2734 4.30859 24.7534 4.30859 30.2734C4.30859 30.6468 4.60193 30.9401 4.97526 30.9401H27.8819C28.2553 30.9401 28.5486 30.6468 28.5486 30.2734C28.5486 24.7534 23.1086 20.2734 16.4286 20.2734Z" />
  </Wrapper>
);
