import React from 'react';
import styled from 'styled-components/macro';

export const Wrapper = styled.input`
  width: 100%;
  padding: 10rem;
  
  outline: none;
  border-radius: 4rem;
  border: 1rem solid #ccc;
  font-family: var(--font-family);

  transition: 0.25s border-color;

  &:focus {
    border-color: var(--primary-color);
  }
`;

export default () => (
  <Wrapper />
);
