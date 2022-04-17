import React, { useState } from 'react';
import styled from 'styled-components/macro';

import Style from '../styled';

export const Wrapper = styled(Style)`
  background: #fff0;
  color: var(--primary-color);
  font-weight: 500;

  &:hover {
    background: var(--primary-color);
    color: white;
  }
`;

export default ({ children, SVGElement }: {
  children: string,
  SVGElement?: ({ color }: { color?: string }) => JSX.Element
}) => {
  const [isHover, setHover] = useState(false);

  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  const svgColor = isHover ? "white" : "var(--primary-color)";

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