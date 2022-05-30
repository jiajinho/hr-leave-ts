import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { toast } from 'react-toastify';

import locale from 'locale';
import type { Checks, LeaveBalance } from './types';


import Table, {
  Header as _Table__Header,
  Cell as _Table__Cell
} from 'components/lib/Table';

import Modal from 'components/lib/Modal';
import UpdateLeave from './components/UpdateLeave';
import Header from './components/Header';
import useColumns from './useColumns';
import data from './mock-data';

const Wrapper = styled.div`

  padding: var(--container-padding);
  background: var(--container-bg-color);
  border-radius: var(--container-border-radius);


  ${_Table__Header}:first-of-type,
  ${_Table__Cell}:first-of-type {
    width: 50rem;
  }
`;

export default () => {

  const [modalVisible, setModalVisible] = useState(false);

  const [checkboxes, setCheckboxes] = useState<Checks>({});

  const columns = useColumns(checkboxes, setCheckboxes);

  /**
   * Not hook
   */
  const handleEdit = () => {
    if (Object.keys(checkboxes).length)
      setModalVisible(true);
    else
      toast.error(locale.en.adjustLeave.error.emptyCheckbox);
  }


  return (
    <>
      <Wrapper>
        <Header
          onEdit={handleEdit}
        />

        <Table<LeaveBalance>
          data={data.balance}
          columns={columns}
          pageSize={10}
        />
      </Wrapper>

      <Modal
        visible={modalVisible}
        setVisible={setModalVisible}
      >
        <UpdateLeave
          checkboxes={checkboxes}
          visible={modalVisible}
          setVisible={setModalVisible}
        />
      </Modal>
    </>
  );
}