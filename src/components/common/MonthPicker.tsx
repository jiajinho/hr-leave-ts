import React, { useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { Calendar } from 'react-widgets/cjs';
import { format } from 'date-fns';

import useDropdown from 'hooks/animation/useDropdown';
import CaretDown, { Wrapper as _CaretDown } from 'components/svg/CaretDown';

export const Wrapper = styled.div(({ $expand }: { $expand: boolean }) => `
  position: relative;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ccc;

  transition: 0.25s border-color;

  ${$expand ? `
    border-color: var(--primary-color);
  `: ''}

  ${_CaretDown} {
    position: absolute;
    top: 50%;
    right: 10rem;
    transform: translateY(-50%);

    height: 5.5rem;
  }
`);

const Input = styled.input`
  width: 100%;
  min-height: 38px;

  border: none;
  outline: none;
  border-radius: 4px;

  font-size: 1em;
  font-family: var(--font-family);
  cursor: pointer;
  padding: 0 0.857em;
`;

export const CalendarContainer = styled.div`
  position: absolute;
  z-index: 1005;
  top: 100%;
  left: 0;

  margin: 1.5rem 0;
  display: inline-block;
  width: 20em;
`;

export default () => {
  const calendar = useRef<HTMLDivElement>(null);

  const [input, setInput] = useState("");
  const [expand, setExpand] = useState(false);

  useDropdown(calendar, expand, setExpand);

  const handleInputClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpand(!expand);
  }

  const handleCalendarChange = (d: Date) => {
    setInput(format(d, 'MMMM yyyy'));
    setExpand(false);
  }

  return (
    <Wrapper $expand={expand}>
      <Input
        onClick={handleInputClick}
        value={input}
        readOnly
      />

      <CaretDown
        color="var(--primary-color)"
      />

      <CalendarContainer
        ref={calendar}
        onClick={e => e.stopPropagation()}
      >
        <Calendar
          views={['year', 'decade', 'century']}
          onChange={handleCalendarChange}
        />
      </CalendarContainer>
    </Wrapper>
  );
}