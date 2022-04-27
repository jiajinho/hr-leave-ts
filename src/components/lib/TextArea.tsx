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

export default ({ rows = 3, value, onChange, readOnly = false }: {
  rows?: number,
  value?: string,
  onChange?: (s: string) => void,
  readOnly?: boolean
}) => (
  <Wrapper
    rows={rows}
    value={value}
    onChange={e => onChange && onChange(e.target.value)}
    readOnly={readOnly}
  />
);