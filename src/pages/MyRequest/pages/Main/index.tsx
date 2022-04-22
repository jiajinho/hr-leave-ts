import React from 'react';
import styled from 'styled-components/macro';

import type { Schema } from './types';

import locale from '../../../../locale';
import routes from '../../../../config/routes';

import useNavStore from '../../../../stores/useNavStore';
import columns from './columns';
import mockData from './mock-data';
import Table from '../../../../components/common/Table';
import Button from '../../../../components/common/Button';
import _Button from '../../../../components/common/Button/styled';
import { Wrapper as _Vertical3Dot } from '../../../../components/svg/Vertical3Dot';

const Wrapper = styled.div`
  padding: var(--container-padding);
  background: var(--container-bg-color);
  border-radius: var(--container-border-radius);

  display: flex;
  flex-direction: column;
  gap: 35rem;

  ${_Button} { align-self: end }
  ${_Vertical3Dot} { height: 14rem }
`;

export default () => {

  const navigate = useNavStore(state => state.navigate);

  const handleNew = () => {
    const route = routes.myRequest.routes.new;
    navigate && navigate(route);
  }

  return (
    <Wrapper>
      <Table<Schema>
        data={mockData}
        columns={columns}
        pageSize={5}
      />

      <Button.Classic onClick={handleNew}>
        {locale.en.myRequest.new}
      </Button.Classic>
    </Wrapper>
  )
}