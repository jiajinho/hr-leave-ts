import styled from 'styled-components/macro';

export default styled.button`
  padding: 6rem 15rem;

  display: inline-flex;
  align-items: center;
  gap: 3rem;

  outline: 0;
  border: 2rem solid var(--primary-color);
  border-radius: 6rem;

  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  transition: 0.25s;

  & > svg {
    height: 15rem;
    width: auto;
  }
`;