import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';

import CaretDown, { Wrapper as _CaretDown } from 'components/svg/CaretDown';
import useAnimation from './useAnimation';

export const Wrapper = styled.div(({ $active, $logout }: {
  $active: boolean,
  $logout: boolean
}) => `
  --color: ${$active ? "white" : "#eee8"};
  --bg: ${$active ? "#eee3" : "#fff0"};

  ${$logout ? `
  --color: white;
  --bg: #fff0;
  `: ''}

  margin: 6rem 0;
`);

export const Title = styled.div`
  padding: 7rem 20rem;
  cursor: pointer;
  transition: 0.25s color, 0.25s background;

  color: var(--color);
  background: var(--bg);

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover { background: #eee3 }

  ${_CaretDown} { height: 7rem }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`;

export const Icon = styled.div`
  aspect-ratio: 1/1;
  height: 20rem;
  width: auto;

  & > svg { height: 100% }
`;

export const Panel = styled.div`
  position: relative;
  overflow: hidden;
  height: 0;
`;

//Normalize into preferred unit css
const normalize = (panelHeight: number) => `${panelHeight}rem`;

const Accordion = ({
  title,
  children = [],
  SVGElement,
  onClick,
  active = false,
  logout = false
}: {
  title: string
  children?: React.ReactNode[],
  SVGElement?: ({ color }: { color?: string }) => JSX.Element,
  onClick?: () => void,
  active?: boolean,
  logout?: boolean
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
  }, [children.length]);

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

  const showCaret = children && children.length > 0;

  /**
   * Render
   */
  return (
    <Wrapper
      onClick={onClick}
      $active={active}
      $logout={logout}
    >
      <Title onClick={() => setExpand(!expand)}>
        <Content>
          <Icon>
            {SVGElement ? <SVGElement color="var(--color)" /> : ''}
          </Icon>

          <p>{title}</p>
        </Content>

        {showCaret && (
          <CaretDown
            direction={expand ? "up" : "down"}
            color="var(--color)"
          />
        )}
      </Title>

      <Panel ref={panelRef}>
        {children?.map((item, i) =>
          <div key={i}>
            {item}
          </div>
        )}
      </Panel>
    </Wrapper>
  );
}

export default Accordion;