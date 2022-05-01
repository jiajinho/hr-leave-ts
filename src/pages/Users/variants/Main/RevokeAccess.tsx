import React from 'react';
import styled from 'styled-components/macro';

import locale from 'locale';

import Button from 'components/lib/Button';
import { User } from 'pages/Users/types';

const Wrapper = styled.div`
  padding: 25rem;
  display: flex;
  flex-direction: column;
  gap: 30rem;
`;

const Description = styled.p`
  font-weight: 500;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20rem;
`;

export default ({ setModalVisible, revokeUser }: {
  setModalVisible: (b: boolean) => void,
  revokeUser?: User
}) => {

  const handleCancelClick = () => {
    setModalVisible(false);
  }

  const handleRevokeClick = () => {
    console.log(`revoke ${revokeUser?.name}`);
    handleCancelClick();
  }

  return (
    <Wrapper>
      <Description>
        {locale.en.users.revoke.description}
      </Description>

      <ButtonGroup>
        <Button.Ghost onClick={handleCancelClick}>
          {locale.en.common.button.cancel}
        </Button.Ghost>

        <Button.Classic onClick={handleRevokeClick}>
          {locale.en.users.revoke.button}
        </Button.Classic>
      </ButtonGroup>
    </Wrapper>
  );
}