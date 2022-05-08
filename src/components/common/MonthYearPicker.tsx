import React, { useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { Calendar } from 'react-widgets/cjs';
import { format } from 'date-fns';

import datetime from 'config/datetime';
import useDropdown from 'hooks/animation/useDropdown';
import CaretDown, { Wrapper as _CaretDown } from 'components/svg/CaretDown';

type View = 'month' | 'year' | 'decade' | 'century';
type Level = 'month' | 'year';

export const Wrapper = styled.div(({
  $expand,
  $level
}: {
  $expand: boolean,
  $level: Level
}) => `
  position: relative;
  border-radius: 4px;
  outline: none;
  border: 1rem solid #ccc;

  transition: 0.25s border-color;

  ${$expand ? `
    border-color: var(--primary-color);
  `: ''}

  ${$level ? `
    width: 90rem;
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
  min-height: 32rem;

  border: none;
  outline: none;
  border-radius: 4rem;

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

export default ({ level, value, onChange }: {
  level: Level,
  value?: Date,
  onChange?: (d: Date) => void
}) => {
  /**
   * Hooks
   */
  const calendar = useRef<HTMLDivElement>(null);

  const [expand, setExpand] = useState(false);

  useDropdown(calendar, expand, setExpand);

  /**
   * Not hook
   */
  const handleInputClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpand(!expand);
  }

  const handleCalendarChange = (d: Date) => {
    onChange && onChange(d);
    setExpand(false);
  }

  const views: View[] = ['decade', 'century'];
  if (level === "month") {
    views.unshift('year');
  }

  let inputValue = "";
  if (value && level === "month") {
    inputValue = format(value, datetime.format.monthPicker);
  }
  else if (value && level === "year") {
    inputValue = format(value, datetime.format.yearPicker);
  }

  /**
   * Render
   */
  return (
    <Wrapper
      $expand={expand}
      $level={level}
    >
      <Input
        onClick={handleInputClick}
        value={inputValue}
        readOnly
      />

      <CaretDown color="var(--primary-color)" />

      <CalendarContainer
        ref={calendar}
        onClick={e => e.stopPropagation()}
      >
        <Calendar
          views={views}
          onChange={handleCalendarChange}
        />
      </CalendarContainer>
    </Wrapper>
  );
}