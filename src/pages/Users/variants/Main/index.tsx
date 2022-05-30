import React, { useState } from 'react';
import styled from 'styled-components/macro';

import locale from 'locale';
import routes from 'config/routes';
import type { User } from '../../types';

import Table, { Header as _Table_Header, Cell as _Table_Cell } from 'components/lib/Table';
import SearchInput from 'components/common/SearchInput';
import UserAdd, { Wrapper as _UserAdd } from 'components/svg/UserAdd';
import Modal from 'components/lib/Modal';
import useNavStore from 'stores/useNavStore';

import useColumns from './useColumns';
import RevokeAccess from './RevokeAccess';

import mock from '../../mock-data';
import PrunableCheckbox from 'components/common/PrunableCheckbox';

const Wrapper = styled.div`
  background: var(--container-bg-color);
  padding: var(--container-padding);
  border-radius: var(--container-border-radius);

  ${_Table_Header}:last-of-type,
  ${_Table_Cell}:last-of-type {
    padding-left: unset;
    width: 60rem;
  }
`;

const Header = styled.header`
  margin-bottom: 20rem;

  display: flex;
  align-items: start;
  gap: 10rem;

  ${_UserAdd} {
    height: 22rem;
    align-self: center;
    cursor: pointer;
  }
`;

const Title = styled.h2`
  flex-grow: 1;
`;

export default () => {

  const navigate = useNavStore(state => state.navigate);

  const [modalVisible, setModalVisible] = useState(false);
  const [revokeUser, setRevokeUser] = useState<User>();

  const openRevokeModal = (u: User) => {
    setRevokeUser(u);
    setModalVisible(true);
  }

  const columns = useColumns(openRevokeModal);

  const handleAddClick = () => {
    navigate && navigate(routes.users.routes!.new);
  }

  return (
    <>
      <Wrapper>
        <Header>
          <Title>
            {locale.en.users.title}
          </Title>

          <PrunableCheckbox
            options={mock.departments}
            max={4}
          />

          <SearchInput />

          <UserAdd onClick={handleAddClick} />
        </Header>

        <Table<User>
          data={mock.users}
          columns={columns}
          pageSize={7}
        />
      </Wrapper>


      <Modal
        visible={modalVisible}
        setVisible={setModalVisible}
      >
        <RevokeAccess
          setModalVisible={setModalVisible}
          revokeUser={revokeUser}
        />
      </Modal>
    </>
  );
}