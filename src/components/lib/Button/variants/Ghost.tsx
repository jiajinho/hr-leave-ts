import React, { useState } from 'react';
import styled from 'styled-components/macro';

import Style from '../styled';

export const Wrapper = styled(Style)(({ $hoverColor }: { $hoverColor: string }) => `
  background: #fff0;
  color: ${$hoverColor};
  border-color: ${$hoverColor};
  font-weight: 500;

  &:hover {
    background: ${$hoverColor};
    color: white;
  }
`);

export default ({
  children,
  SVGElement,
  onClick,
  hoverColor = "var(--primary-color)"
}: {
  children: string,
  SVGElement?: ({ color }: { color?: string }) => JSX.Element,
  onClick?: () => void,
  hoverColor?: string
}) => {
  const [isHover, setHover] = useState(false);

  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  const svgColor = isHover ? "white" : hoverColor;

  return (
    <Wrapper
      onClick={onClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      $hoverColor={hoverColor}
    >
      {children}
      {SVGElement && <SVGElement color={svgColor} />}
    </Wrapper>
  )
}