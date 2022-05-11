import React, { useState } from 'react';
import styled from 'styled-components/macro';

export const Wrapper = styled.div(({ $focus }: {
  $focus: boolean
}) => `
  width: 100%;
  padding: 8.5rem 15rem;

  display: flex;
  align-items: center;
  gap: 5rem;

  border-radius: 4rem;
  border: 1rem solid #ccc;
  background: white;
  
  transition: 0.25s border-color;

  border-color: ${$focus ?
    "var(--primary-color)" :
    "#ccc"
  };
`);

export const Input = styled.input`
  width: 100%;

  outline: none;
  border: none;
  font-family: var(--font-family);
  background: transparent;
`;

export default ({
  value,
  placeholder,
  onChange,
  readOnly = false,
  icon
}: {
  value?: string,
  placeholder?: string
  onChange?: (s: string) => void,
  readOnly?: boolean,
  icon?: JSX.Element
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <Wrapper
      $focus={focus}
      tabIndex={-1}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <Input
        value={value}
        placeholder={placeholder}
        onChange={e => onChange && onChange(e.currentTarget.value)}
        readOnly={readOnly}

        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />

      {icon}
    </Wrapper>
  );
}
