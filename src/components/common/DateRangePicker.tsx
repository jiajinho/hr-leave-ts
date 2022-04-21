import React from 'react';
import styled from 'styled-components/macro';
import { DatePicker } from 'react-widgets/cjs';

import locale from '../../locale';
import Label, { Wrapper as _Label } from './Label';

export const Wrapper = styled.div`
  display: flex;
  gap: var(--gap, 20rem);

  ${_Label} { flex-grow: 1 }
`;

export default () => {
  return (
    <Wrapper>
      <Label title={locale.en.common.date.start}>
        <DatePicker
          placeholder={locale.en.common.date.placeholder}
          valueFormat={{ dateStyle: "medium" }}
        />
      </Label>

      <Label title={locale.en.common.date.end}>
        <DatePicker
          placeholder={locale.en.common.date.placeholder}
          valueFormat={{ dateStyle: "medium" }}
        />
      </Label>
    </Wrapper>
  );
}