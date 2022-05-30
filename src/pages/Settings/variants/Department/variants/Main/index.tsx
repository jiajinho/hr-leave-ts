import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import api from 'config/api';
import department from 'api/department';
import type { Department } from 'schema';
import useColumns from './useColumns';

import Table, {
  Wrapper as _Table,
  Header as _Table__Header,
  Cell as _Table__Cell
} from 'components/lib/Table';
import Modal from 'components/lib/Modal';
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
  /**
   * Hooks
   */
  const { data: queryData } = useQuery(
    department.queryKey,
    department.list,
    { staleTime: api.staleTime }
  );

  const [departments, setDepartments] = useState<Department[]>([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [delDept, setDelDept] = useState<Department>();

  const columns = useColumns(
    (d: Department) => {
      setDelDept(d);
      setModalVisible(true);
    }
  );

  useEffect(() => {
    if (queryData) {
      const data: Department[] = [];

      queryData.forEach(item => {
        data.push(department.mapToReactSchema(item));
      });

      setDepartments(data);
    }
  }, [queryData]);

  /**
   * Render
   */
  return (
    <>
      <Wrapper>
        <Table<Department>
          data={departments}
          columns={columns}
          pageSize={5}
        />

        <Modal
          visible={modalVisible}
          setVisible={setModalVisible}
        >
          <DeleteDept
            setModalVisible={setModalVisible}
            department={[delDept, setDelDept]}
          />
        </Modal>
      </Wrapper>
    </>
  );
}