import React from 'react';
import styled from 'styled-components/macro';

export const Wrapper = styled.input`
  width: 100%;
  padding: 7rem 15rem;
  
  outline: none;
  border-radius: 4rem;
  border: 1rem solid #ccc;
  font-family: var(--font-family);

  transition: 0.25s border-color;

  &:focus {
    border-color: var(--primary-color);
  }
`;

export default ({ value, placeholder, onChange, readOnly = false }: {
  value?: string,
  placeholder?: string
  onChange?: (s: string) => void,
  readOnly?: boolean
}) => (
  <Wrapper
    value={value}
    placeholder={placeholder}
    onChange={e => onChange && onChange(e.currentTarget.value)}
    readOnly={readOnly}
  />
);
