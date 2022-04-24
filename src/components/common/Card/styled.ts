import styled from "styled-components/macro";

export const Wrapper = styled.div`
  position: relative;
  padding: 20rem 25rem;
  background: white;

  border-radius: 10rem;

  & p { margin: 0 }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 20rem;
`;

export const Stripe = styled.div`
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-50%, -50%);

  height: 80%;
  width: 8rem;
  border-radius: 500rem;
  background: var(--primary-color);
`;