import React, { useState, useRef } from 'react';
import styled from 'styled-components/macro';

import useAnimation from './useAnimation';

const Wrapper = styled.div`
  resize: none;
  border: 1px solid red;
  outline: 0;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 50%;

  margin: 5rem 0;
  background: white;
  box-shadow: 0 0 10rem 1rem #0004;
`;

const Item = styled.div`
  margin: 3rem 0;
  padding: 2rem 20rem;
  cursor: pointer;

  &:hover {
    background: #eee;
  }
`;

type Option = {
  display: string,
  value: string
}

export default ({ options }: { options: Option[] }) => {
  /**
   * Hooks
   */
  const dom = {
    container: useRef<HTMLDivElement>(null),
    editable: useRef<HTMLDivElement>(null)
  }

  const [selections, setSelections] = useState<Option[]>([]);
  const [expand, setExpand] = useState(false);

  useAnimation(dom.container, expand, setExpand);

  /**
   * Not hooks
   */
  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const caretPosition = window.getSelection()?.getRangeAt(0).getBoundingClientRect();

    if (caretPosition && dom.container.current) {
      const x = caretPosition.x + caretPosition.width;
      const y = caretPosition.y + caretPosition.height;

      if (!x && !y) {
        setExpand(false);
      }
      else {
        dom.container.current.style.left = `${x}px`;
        dom.container.current.style.top = `${y}px`;
        setExpand(true);
      }
    }
  }

  const handleOptionClick = (o: Option) => {
    if (dom.editable.current) {
      dom.editable.current.innerText = "";
    }

    setSelections(prev => {
      return [...prev, o];
    });
  }

  /**
   * Render
   */
  return (
    <>
      <Wrapper>
        {selections.map((item, i) =>
          <div key={i}>{item.display}</div>
        )}

        <div
          ref={dom.editable}
          contentEditable
          onKeyUp={handleKeyUp}
        />
      </Wrapper>

      {/**Add regex filter */}
      <Container ref={dom.container}>
        {options.map((item, i) =>
          <Item
            key={i}
            onClick={() => handleOptionClick(item)}
          >
            {item.display}
          </Item>
        )}
      </Container>
    </>

  );
}