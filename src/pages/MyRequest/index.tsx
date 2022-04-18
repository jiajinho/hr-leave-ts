import React from 'react';
import styled from 'styled-components/macro';

import type { Schema } from './types';

import columns from './columns';
import mockData from './mock-data';
import Table from '../../components/common/Table';


const Wrapper = styled.div`
  
`;

export default () => {

  return (
    <Wrapper>
      <Table<Schema>
        data={mockData}
        columns={columns}
      />
    </Wrapper>
  )
}