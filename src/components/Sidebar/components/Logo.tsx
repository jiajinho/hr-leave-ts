import React from 'react';
import styled from 'styled-components/macro';

export const Wrapper = styled.img`
  aspect-ratio: 150/55;
  height: auto;
  width: auto;
`;

export default () => {
  return (
    <Wrapper
      src="/static/logo.png"
    />
  );
}