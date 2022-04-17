import React from 'react';
import styled from 'styled-components/macro';

import Style from '../styled';

export const Wrapper = styled(Style)`
  background: var(--primary-color);
  color: white;

  &:hover { opacity: 0.7 }
`;

export default ({ children, SVGElement, onClick }: {
  children: string,
  SVGElement?: ({ color }: { color?: string }) => JSX.Element,
  onClick?: () => void
}) => (
  <Wrapper onClick={onClick}>
    {children}
    {SVGElement && <SVGElement color="white" />}
  </Wrapper>
);

