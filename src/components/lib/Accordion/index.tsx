import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import useAnimation from './useAnimation';

export const Wrapper = styled.div`
`;

export const Title = styled.p`
  padding: 10rem 0;
  cursor: pointer;

  background: pink;
`;

export const Panel = styled.div`
  position: relative;
  overflow: hidden;

  background: lightblue;
`;

//Normalize into preferred unit css
const normalize = (panelHeight: number) => `${panelHeight}rem`;

const Accordion = ({ title, children }: {
  title: string
  children?: string | JSX.Element,
}) => {
  /**
   * Hooks
   */
  const panelRef = useRef<HTMLDivElement>(null);
  const [expand, setExpand] = useState(false);

  const [panelHeight, setPanelHeight] = useState("0");
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    setPanelHeight(getPanelHeight());
  }, []);

  useEffect(() => {
    panelRef.current!.style.height = "unset";
    setRefresh(true);
  }, [children]);

  useEffect(() => {
    if (refresh) {
      setPanelHeight(getPanelHeight());
      applyExpand(expand);

      setRefresh(false);
    }
  }, [refresh]);

  useAnimation(refresh, panelRef, panelHeight, expand);

  /**
   * Not hook
   */
  const getPanelHeight = () => {
    return normalize(panelRef.current!.getBoundingClientRect().height);
  }

  const applyExpand = (expand: boolean) => {
    const height = expand ? panelHeight : "0";
    panelRef.current!.style.height = height;
  }

  /**
   * Render
   */
  return (
    <Wrapper>
      <Title onClick={() => setExpand(!expand)}>
        {title}
      </Title>

      <Panel ref={panelRef}>
        {children}
      </Panel>
    </Wrapper>
  );
}

export default Accordion;