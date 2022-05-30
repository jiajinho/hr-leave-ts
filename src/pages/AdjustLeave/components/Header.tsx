import React from 'react';
import styled from 'styled-components/macro';

import locale from 'locale';
import PrunableCheckbox from 'components/common/PrunableCheckbox';

import data from '../mock-data';
import SearchInput from 'components/common/SearchInput';
import EditPen, { Wrapper as _EditPen } from 'components/svg/EditPen';

const Wrapper = styled.header`
  margin-bottom: 10rem;

  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15rem;

  ${_EditPen} {
    height: 20rem;
    cursor: pointer;
  }
`;

export default ({ onEdit }: {
  onEdit: () => void,
}) => {
  return (
    <Wrapper>
      <Container>
        <h2>
          {locale.en.adjustLeave.leaveType}
        </h2>

        <PrunableCheckbox
          options={data.type}
          max={10}
        />
      </Container>


      <Container>
        <SearchInput />

        <EditPen onClick={onEdit} />
      </Container>
    </Wrapper>
  );
}