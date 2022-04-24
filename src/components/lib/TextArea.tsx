import React from 'react';
import styled from 'styled-components/macro';

export const Wrapper = styled.textarea`
  width: 100%;
  padding: 10rem;
  
  outline: none;
  border-radius: 4rem;
  border: 1rem solid #ccc;

  transition: 0.25s border-color;
  resize: vertical;
  font-family: var(--font-family);

  &:focus {
    border-color: var(--primary-color);
  }
`;

export default ({ rows = 3, value }: {
  rows?: number,
  value?: string
}) => (
  <Wrapper
    rows={rows}
    value={value}
  />
);