import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components/macro';

import config from '../../config';
import Style from './styled';

export const Wrapper = styled(Style)`
  background: #fff0;
  color: ${config.theme.primary};
  font-weight: 500;

  &:hover {
    background: ${config.theme.primary};
    color: white;
  }
`;

/**
 * @param children string
 * @param SVGElement? ({ color: string }) => JSX.Element
 */
export default ({ children, SVGElement }) => {
  const [isHover, setHover] = useState(false);

  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  const svgColor = isHover ? "white" : config.theme.primary;

  return (
    <Wrapper
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
      {SVGElement && <SVGElement color={svgColor} />}
    </Wrapper>
  )
}