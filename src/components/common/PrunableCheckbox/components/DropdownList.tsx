import React, { useState, useRef } from 'react';
import styled from 'styled-components/macro';

import type { Option } from '../types';

import Input, { Wrapper as _Input } from 'components/lib/Input';
import CaretDown, { Wrapper as _CaretDown } from 'components/svg/CaretDown';
import useDropdown from 'hooks/animation/useDropdown';


const Wrapper = styled.div`
  position: relative;

  ${_Input} { width: 100rem }

  ${_Input},
  ${_Input} * { 
    cursor: pointer;
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

  background: #f001;
  border-radius: 4rem;
`;

const Select = styled.div`
  padding: 5rem 10rem;
  cursor: pointer;
`;

export default ({ options }: {
  options: Option[]
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
        value="More"
        readOnly
        icon={<CaretDown />}
      />

      <Container ref={ref} >
        {options.map((o, i) =>
          <Select key={i}>
            {o.display}
          </Select>
        )}
      </Container>
    </Wrapper>
  );
}