import React from 'react';
import styled from 'styled-components/macro';

import days from './data';
import data from './mock-data';
import { Day } from './types';
import useColumns from './useColumns';

import PrunableCheckbox from 'components/common/PrunableCheckbox';
import Table from 'components/lib/Table';
import Button, { Wrapper as _Button } from 'components/lib/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30rem;

  padding: var(--container-padding);
  border-radius: var(--container-border-radius);
  background: var(--container-bg-color);

  ${_Button} {
    align-self: end;
  }
`;

export default () => {

  const columns = useColumns();

  return (
    <Wrapper>
      <PrunableCheckbox
        options={days}
        max={7}
      />

      <Table<Day>
        data={data}
        columns={columns}
        pageSize={10}
      />

      <Button.Classic>
        Create Schedule
      </Button.Classic>
    </Wrapper>
  );
}