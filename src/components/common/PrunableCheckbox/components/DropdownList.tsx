import React, { useState, useRef } from 'react';
import styled from 'styled-components/macro';

import locale from 'locale';
import type { Option } from '../types';

import Input, { Wrapper as _Input, Input as _Input__Input } from 'components/lib/Input';
import CaretDown, { Wrapper as _CaretDown } from 'components/svg/CaretDown';
import useDropdown from 'hooks/animation/useDropdown';

const Wrapper = styled.div`
  position: relative;

  ${_Input} { width: 100rem }

  ${_Input},
  ${_Input__Input} { 
    cursor: pointer;
  }

  ${_Input__Input} {
    font-weight: bold;
  }

  ${_CaretDown} {
    height: 6rem;
  }
`;

const Container = styled.div`
  margin-top: 3rem;
  padding: 5rem 0;
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;

  background: white;
  border-radius: 4rem;
  box-shadow: 0 0 4rem 1rem #0004;
`;

const Select = styled.div(({ $active }: {
  $active: boolean
}) => `
  padding: 6rem 10rem;
  cursor: pointer;
  transition: 0.25s;

  ${$active ? `
    background: var(--primary-color);
    color: white;
  ` : `
    &:hover { background: #eee }
  `}
`);

export default ({ actives, options, onSelectClick }: {
  actives: string[], //stores the id of options
  options: Option[],
  onSelectClick: (id: string) => void
}) => {

  const ref = useRef<HTMLDivElement>(null);

  const [expand, setExpand] = useState(false);

  useDropdown(ref, expand, setExpand);

  const handleWrapperClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpand(true);
  }

  return (
    <Wrapper onClick={handleWrapperClick}>
      <Input
        value={locale.en.common.prunableCheckbox.pruneText}
        readOnly
        icon={<CaretDown color="var(--primary-color)" />}
      />

      <Container ref={ref} >
        {options.map((o, i) =>
          <Select
            key={i}
            onClick={() => onSelectClick(o.id)}
            $active={actives.includes(o.id)}
          >
            {o.display}
          </Select>
        )}
      </Container>
    </Wrapper>
  );
}