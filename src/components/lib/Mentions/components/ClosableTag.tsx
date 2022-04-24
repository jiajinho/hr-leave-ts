import React from 'react';
import styled from 'styled-components/macro';

import Tag, { Wrapper as _Tag } from '../../Tag';
import X, { Wrapper as _X } from '../../../svg/X';

const Wrapper = styled.div`
  position: relative;

  ${_Tag} {
    padding: 1rem 25rem;
  }

  ${_X} {
    height: 20rem;
    position: absolute;
    right: -2rem;
    top:-2rem;
  }
`;

export default ({ children, colors, onClose }: {
  children: string,
  colors: { bg: string, fg: string },
  onClose?: () => void
}) => {
  const { bg, fg } = colors;

  return (
    <Wrapper>
      <Tag background={bg} color={fg}>
        {children}
      </Tag>

      <X color={fg} onClick={onClose} />
    </Wrapper>
  )
}