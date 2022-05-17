import React from 'react';
import styled from 'styled-components/macro';

import type { Leave } from '../types';

import locale from 'locale';
import Button from 'components/lib/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40rem;
`;

const LegendContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20rem;
`;

const Legend = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  color: #9f9f9f;
  font-size: 14rem;
`;

const Square = styled.div(({ $background }: { $background: string }) => `
  aspect-ratio: 1/1;
  height: 10rem;
  width: auto;
  background: ${$background};
`);

export default ({ legends, onViewClick }: {
  legends: Leave[],
  onViewClick?: () => void
}) => {
  return (
    <Wrapper>
      {onViewClick &&
        <Button.Classic onClick={onViewClick}>
          {locale.en.common.button.viewDetail}
        </Button.Classic>
      }

      <LegendContainer>
        {legends.map((item, i) =>
          <Legend key={i}>
            <Square $background={item.color} />
            <p>{item.legend}</p>
          </Legend>
        )}
      </LegendContainer>
    </Wrapper>
  );
}