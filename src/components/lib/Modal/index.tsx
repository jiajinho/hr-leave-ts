import React, { useRef, useEffect } from 'react';
import styled from 'styled-components/macro';

import X, { Wrapper as _X } from 'components/svg/X';
import useAnimation from './useAnimation';

export const Mask = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  background: #0006;

  visibility: hidden;
  opacity: 0;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: white;
  border-radius: 4rem;
  padding: 20rem;

  & > ${_X} {
    position: absolute;
    top: 10rem;
    right: 10rem;
    width: 20rem;
  }
`;

export default ({ visible, setVisible, children }: {
  visible: boolean,
  setVisible: (b: boolean) => void,
  children: JSX.Element | string
}) => {

  const mask = useRef<HTMLDivElement>(null);

  useAnimation(mask, visible);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (mask.current && e.key === "Escape") {
        setVisible(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Mask
      ref={mask}
      onClick={() => setVisible(false)}
    >
      <Wrapper onClick={e => e.stopPropagation()}>
        <X
          color="#0004"
          onClick={() => setVisible(false)}
        />
        {children}
      </Wrapper>
    </Mask>
  );
}