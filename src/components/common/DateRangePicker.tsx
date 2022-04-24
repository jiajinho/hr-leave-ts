import React from 'react';
import styled from 'styled-components/macro';
import { DatePicker } from 'react-widgets/cjs';

import locale from '../../locale';
import Label, { Wrapper as _Label } from '../lib/Label';

export const Wrapper = styled.div`
  display: flex;
  gap: var(--gap, 20rem);

  ${_Label} { flex-grow: 1 }
`;

export type DateType = {
  defaultValue?: Date,
  readonly?: boolean
}

export default ({ start, end }: {
  start?: DateType,
  end?: DateType
}) => {
  return (
    <Wrapper>
      <Label title={locale.en.common.date.start}>
        <DatePicker
          defaultValue={start?.defaultValue}
          readOnly={start?.readonly}
          placeholder={locale.en.common.date.placeholder}
          valueFormat={{ dateStyle: "medium" }}
        />
      </Label>

      <Label title={locale.en.common.date.end}>
        <DatePicker
          defaultValue={end?.defaultValue}
          readOnly={end?.readonly}
          placeholder={locale.en.common.date.placeholder}
          valueFormat={{ dateStyle: "medium" }}
        />
      </Label>
    </Wrapper>
  );
}