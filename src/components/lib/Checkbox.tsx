import React from 'react';
import styled from 'styled-components/macro';

import Check, { Wrapper as _Check } from 'components/svg/Check';

export const Wrapper = styled.div(({ $active, $activeColor }: {
  $active: boolean,
  $activeColor: string
}) => `
  position: relative;
  aspect-ratio: 1/1;
  height: 13rem;
  width: auto;

  border: 1rem solid black;
  border-radius: 2rem;
  cursor: pointer;

  transition: 0.25s background;

  ${$active ? `
  background: ${$activeColor};
  border-color: ${$activeColor};
  ` : ''}
  
  ${_Check} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    opacity: 0;
    transition: 0.25s opacity;

    ${$active ? `
    opacity: 1;
    `: ''}
  }
`);

export default ({
  active = false,
  activeColor = "red",
  onClick,
}: {
  active?: boolean,
  activeColor?: string,
  onClick?: () => void
}) => {


  return (
    <Wrapper
      onClick={onClick}
      $active={active}
      $activeColor={activeColor}
    >
      <Check color="white" />
    </Wrapper>
  );
}