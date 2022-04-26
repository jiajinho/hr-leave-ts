import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { DropdownList as WidgetDropdownList } from 'react-widgets/cjs';

import RadioButton, { Wrapper as _RadioButton } from './RadioButton';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  ${_RadioButton} {
    min-width: 80rem;
  }
`;

const DropdownList = styled(WidgetDropdownList)`
  align-self: stretch;

  & > div:first-of-type { 
    height: 100%;
    min-height: unset;
  }

  & .rw-popup-container { right: unset }
`;

export type Option = {
  id: string,
  display: string
}

export default ({ options, max }: {
  options: Option[],
  max: number
}) => {

  const [active, setActive] = useState<string | null>(null);
  const [radio, setRadio] = useState<string | null>(null);

  const handleRadioClick = (id: string) => {
    if (id === active) setActive(null);
    else setActive(id);
  }

  const visibleOptions = options.slice(0, max);
  const prunedOptions = options.slice(max);

  return (
    <Wrapper>
      {visibleOptions.map((item, i) =>
        <RadioButton
          key={i}
          active={active === item.id}
          onClick={() => {
            handleRadioClick(item.id);
            setRadio(null);
          }}
        >
          {item.display}
        </RadioButton>
      )}

      <DropdownList
        dataKey="id"
        textField="display"
        placeholder="More"
        data={prunedOptions}
        value={radio}
        onChange={value => {
          const v = value as Option;
          handleRadioClick(v.id);
          setRadio(v.id);
        }}
      />
    </Wrapper>
  );
}