import React from 'react';
import styled from 'styled-components/macro';

export const Wrapper = styled.div(({ $active }: {
  $active: boolean
}) => `
  flex-shrink: 0;

  padding: 7rem 10rem;
  background: #eee;
  border-radius: 6rem;

  cursor: pointer;
  text-align: center;
  transition: 0.25s;

  ${$active ? `
  background: var(--primary-color);
  color: white;
  `: ''}
`);

export default ({ children, active = false, onClick }: {
  children: string,
  active?: boolean,
  onClick?: () => void
}) => {
  return (
    <Wrapper
      onClick={onClick}
      $active={active}
    >
      {children}
    </Wrapper>
  );
}