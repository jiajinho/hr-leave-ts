import React from 'react';
import styled from 'styled-components/macro';

import Input, { Wrapper as _Input } from 'components/lib/Input';
import MagnifyGlass, { Wrapper as _MagnifyGlass } from 'components/svg/MagnifyGlass';

export const Wrapper = styled.div`
  position: relative;

  ${_Input} {
    background: #f1f1f1;
    border: none;
    padding-right: 30rem;
  }

  ${_MagnifyGlass} {
    position: absolute;
    top: 50%;
    right: 10rem;

    transform: translateY(-50%);
    height: 12rem;
  }
`;

export default ({ value, onChange }: {
  value?: string,
  onChange?: (s: string) => void
}) => {
  return (
    <Wrapper>
      <Input
        value={value}
        placeholder="Search here"
        onChange={onChange}
      />
      <MagnifyGlass color="var(--primary-color)" />
    </Wrapper>
  );
}