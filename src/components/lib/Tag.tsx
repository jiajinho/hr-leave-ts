import React from 'react';
import styled from 'styled-components/macro';

export const Wrapper = styled.div(({ $color, $background }: {
  $color: string,
  $background: string
}) => `
  color: ${$color};
  background: ${$background};

  padding: 2rem 10rem;
  display: inline-block;
  border-radius: 4rem;
`);

export default ({ children, color, background }: {
  children: string,
  color: string,
  background: string
}) => (
  <Wrapper
    $color={color}
    $background={background}
  >
    {children}
  </Wrapper>
);
