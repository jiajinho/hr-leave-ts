import React, { useState } from 'react';
import styled from 'styled-components';

import type { Department } from '../../types';
import mock from '../../mock-data';

import Table, {
  Wrapper as _Table,
  Header as _Table__Header,
  Cell as _Table__Cell
} from 'components/lib/Table';

import Modal from 'components/lib/Modal';
import useColumns from './useColumns';
import DeleteDept from './DeleteDept';

const Wrapper = styled.div`
  position: relative;
  padding: var(--container-padding);
  padding-top: 10rem;

  background: var(--container-bg-color);
  border-radius: var(--container-border-radius);

  ${_Table__Header} { vertical-align: middle }

  ${_Table__Header}:last-of-type,
  ${_Table__Cell}:last-of-type {
    text-align: end;
    width: 90rem;
  }
`;

export default () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [delDept, setDelDept] = useState<Department>();

  const openDelDeptModal = (d: Department) => {
    setDelDept(d);
    setModalVisible(true);
  }

  const columns = useColumns(openDelDeptModal);

  return (
    <>
      <Wrapper>
        <Table<Department>
          data={mock}
          columns={columns}
          pageSize={5}
        />

        <Modal
          visible={modalVisible}
          setVisible={setModalVisible}
        >
          <DeleteDept
            setModalVisible={setModalVisible}
            department={delDept}
          />
        </Modal>
      </Wrapper>
    </>
  );
}