import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components/macro';

import ClosableTag from './components/ClosableTag';
import Dropdown from './components/Dropdown';
import useAnimation from './useAnimation';

const Wrapper = styled.div(({ $focus }: { $focus: boolean }) => `
  padding: 10rem;
  border: 1rem solid #ccc;
  border-radius: 4rem;
  outline: 0;

  display: flex;
  flex-wrap: wrap;
  gap: 10rem;

  cursor: text;
  transition: 0.25s border-color;

  ${$focus ? `
  border-color: var(--primary-color);
  `: ''}
`);

const Editable = styled.div`
  border: none;
  outline: none;
  min-width: 50rem;
`;

type Option = {
  display: string,
  value: string
}

export default ({ options, tagColor, onChange }: {
  options: Option[],
  tagColor: { bg: string, fg: string },
  onChange?: (o: Option[]) => void
}) => {
  /**
   * Hooks
   */
  const dom = {
    wrapper: useRef<HTMLDivElement>(null),
    dropdown: useRef<HTMLDivElement>(null),
    editable: useRef<HTMLDivElement>(null)
  }

  const [focus, setFocus] = useState(false);

  const [input, setInput] = useState<string | null>(null);
  const [selections, setSelections] = useState<Option[]>([]);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    onChange && onChange(selections);
  }, [selections, onChange]);

  useAnimation(dom.dropdown, expand, setExpand);

  /**
   * Not hooks
   */
  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const caretPosition = window.getSelection()?.getRangeAt(0).getBoundingClientRect();

    if (caretPosition && dom.dropdown.current) {
      const x = caretPosition.x + caretPosition.width;
      const y = caretPosition.y + caretPosition.height;

      if (x && y) {
        dom.dropdown.current.style.left = `${x}px`;
        dom.dropdown.current.style.top = `${y}px`;
        setExpand(true);
      }
    }
  }

  const addOption = (o: Option) => {
    if (dom.editable.current) {
      dom.editable.current.innerText = "";
      setInput(null);
    }

    setSelections(prev => {
      return [...prev, o];
    });
  }

  const deleteOption = (index: number) => {
    setSelections(prev => {
      const clone = [...prev];
      clone.splice(index, 1);

      return clone;
    });
  }

  /**
   * Render
   */
  return (
    <>
      <Wrapper
        ref={dom.wrapper}
        $focus={focus}
        onClick={() => { dom.editable.current?.focus() }}
      >
        {selections.map((item, i) =>
          <ClosableTag
            key={i}
            colors={tagColor}
            onClose={() => deleteOption(i)}
          >
            {item.display}
          </ClosableTag>
        )}

        <Editable
          ref={dom.editable}
          contentEditable
          onKeyUp={handleKeyUp}
          onInput={e => setInput(e.currentTarget.textContent)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </Wrapper>

      <Dropdown
        ref={dom.dropdown}
        options={options}
        input={input}
        addOption={addOption}
      />
    </>
  );
}