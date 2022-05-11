import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import { Option } from './types';
import Button from './components/Button';
import DropdownList from './components/DropdownList';

const Wrapper = styled.div`
  display: flex;
  gap: 5rem;
`;

export default ({ options, max }: {
  options: Option[],
  max: number
}) => {
  const [actives, setActives] = useState<string[]>([]);

  useEffect(() => {
    const actives = [];

    for (let i = 0; i < options.length; i++) {
      actives.push(options[i].id);
    }

    setActives(actives);
  }, []);

  const visibleOptions = options.slice(0, max);
  const prunedOptions = options.slice(max);

  const handleButtonClick = (value: string) => {
    const index = actives.indexOf(value);
    const clone = [...actives];

    if (index !== -1) {
      const firstHalf = clone.slice(0, index);
      const secondHalf = clone.slice(index + 1);

      setActives([...firstHalf, ...secondHalf]);
    }
    else {
      clone.push(value);
      setActives(clone);
    }
  }

  return (
    <Wrapper>
      {visibleOptions.map((item, i) =>
        <Button
          key={i}
          onClick={() => handleButtonClick(item.id)}
          active={actives.includes(item.id)}
        >
          {item.display}
        </Button>
      )}

      {prunedOptions.length > 0 &&
        <DropdownList
          actives={actives}
          options={prunedOptions}
          onSelectClick={handleButtonClick}
        />
      }
    </Wrapper>
  )
}