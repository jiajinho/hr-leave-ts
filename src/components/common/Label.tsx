import React from 'react';
import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;

  width: 100%;
`;

export const Label = styled.label`
  font-size: 12rem;
  color: #717579;
`;

export const Container = styled.div`
`;

export default ({ title, children }: {
  title: string,
  children: JSX.Element
}) => (
  <Wrapper>
    <Label>{title}</Label>

    <Container>
      {children}
    </Container>
  </Wrapper>
);
