import React from 'react';

import locale from 'locale';
import type { User } from 'pages/Users/types';

import Button from 'components/lib/Button';
import { Wrapper, Description, ButtonGroup } from 'components/lib/Modal/styled';

export default ({ setModalVisible, revokeUser }: {
  setModalVisible: (b: boolean) => void,
  revokeUser?: User
}) => {

  const handleCancelClick = () => {
    setModalVisible(false);
  }

  const handleRevokeClick = () => {
    console.log(`revoke ${revokeUser?.firstName} ${revokeUser?.lastName}`);
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