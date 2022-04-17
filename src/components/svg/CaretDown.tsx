import React from 'react';
import styled from 'styled-components/macro';

export type Direction = "up" | "down" | "left" | "right";

export const Wrapper = styled.svg(({ $rotate }: {
  $rotate: string
}) => `
  aspect-ratio: 19/11;
  height: auto;
  width: auto;

  transform: rotate(${$rotate});
`);

export default ({ direction = "down" }: {
  direction?: Direction
}) => {

  let rotate = "0deg";

  switch (direction) {
    case "up":
      rotate = "180deg";
      break;
    case "left":
      rotate = "90deg";
      break;
    case "right":
      rotate = "-90deg";
      break;
  }

  return (
    <Wrapper
      width={19} height={11}
      viewBox="0 0 19 11"
      $rotate={rotate}
    >
      <path
        d="M1.37695 1.24805L9.65513 9.52623L17.9333 1.24805"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Wrapper>
  );
}
