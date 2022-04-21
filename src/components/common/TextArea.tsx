import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.textarea`
  width: 100%;
  padding: 10rem;
  
  outline: none;
  border-radius: 4px;
  border: 1px solid #ccc;

  transition: 0.25s border-color;
  resize: vertical;

  &:focus {
    border-color: var(--primary-color);
  }
`;

export default () => (
  <Wrapper />
);