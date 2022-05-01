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

export default ({ children, SVGElement, onClick }: {
  children: string,
  SVGElement?: ({ color }: { color?: string }) => JSX.Element,
  onClick?: () => void
}) => {
  const [isHover, setHover] = useState(false);

  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  const svgColor = isHover ? "white" : "var(--primary-color)";

  return (
    <Wrapper
      onClick={onClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
      {SVGElement && <SVGElement color={svgColor} />}
    </Wrapper>
  )
}