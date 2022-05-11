import React, { useState } from 'react';
import styled from 'styled-components/macro';

import useColumns from './useColumns';
import { Holiday } from '../../types';
import mock from '../../mock-data';

import MonthYearPicker, {
  Wrapper as _MonthYearPicker,
  CalendarContainer as _MonthYearPicker__CalendarContainer
} from 'components/common/MonthYearPicker';

import Table, {
  Wrapper as _Table,
  Header as _Table__Header,
  Cell as _Table__Cell
} from 'components/lib/Table';

import Modal from 'components/lib/Modal';
import DeleteHoliday from './DeleteHoliday';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;

  ${_MonthYearPicker} { align-self: end }

  ${_MonthYearPicker__CalendarContainer} {
    left: unset;
    right: 0;
  }

  ${_Table} {
    padding: var(--container-padding);
    padding-top: 5rem;

    background: var(--container-bg-color);
    border-radius: var(--container-border-radius);
  }

  ${_Table__Header} { vertical-align: middle }

  ${_Table__Header}:last-of-type,
  ${_Table__Cell}:last-of-type {
    text-align: end;
    width: 90rem;
  }
`;

export default () => {

  const [year, setYear] = useState(new Date());

  const [modalVisible, setModalVisible] = useState(false);
  const [delHoliday, setDelHoliday] = useState<Holiday>();

  const openDelHolidayModal = (h: Holiday) => {
    setDelHoliday(h);
    setModalVisible(true);
  }

  const columns = useColumns(openDelHolidayModal);

  return (
    <>
      <Wrapper>
        <MonthYearPicker
          level="year"
          value={year}
          onChange={setYear}
        />

        <Table<Holiday>
          columns={columns}
          data={mock}
          pageSize={10}
        />
      </Wrapper>

      <Modal
        visible={modalVisible}
        setVisible={setModalVisible}
      >
        <DeleteHoliday
          setModalVisible={setModalVisible}
          holiday={delHoliday}
        />
      </Modal>
    </>
  );
}