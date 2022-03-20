import styled from 'styled-components/macro';

import config from '../../config';

export default styled.button`
  padding: 0.7rem 2rem;

  display: inline-flex;
  align-items: center;
  gap: 0.3rem;

  outline: 0;
  border: 0.15rem solid ${config.theme.primary};
  border-radius: 0.6rem;

  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  transition: 0.25s;

  & > svg {
    height: 1.2rem !important;
    width: auto !important;
  }
`;