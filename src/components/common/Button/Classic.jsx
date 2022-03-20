import React from 'react';
import styled from 'styled-components/macro';

import config from '../../config';
import Style from './styled';

export const Wrapper = styled(Style)`
  background: ${config.theme.primary};
  color: white;

  &:hover { opacity: 0.7 }
`;

/**
 * @param children string
 * @param SVGElement? ({ color: string }) => JSX.Element
 */
export default ({ children, SVGElement }) => (
  <Wrapper>
    {children}
    {SVGElement && <SVGElement color="white" />}
  </Wrapper>
);

