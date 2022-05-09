import React from 'react';

import type { Holiday } from '../../types';

import { Wrapper, Description, ButtonGroup } from 'components/lib/Modal/styled';
import Button from 'components/lib/Button';
import locale from 'locale';


export default ({ setModalVisible, holiday }: {
  setModalVisible: (b: boolean) => void,
  holiday?: Holiday
}) => {

  const handleCancelClick = () => {
    setModalVisible(false);
  }

  const handleDeleteClick = () => {
    console.log(holiday);
  }

  return (
    <Wrapper>
      <Description>
        {locale.en.settings.holiday.deleteDesc}
      </Description>

      <ButtonGroup>
        <Button.Ghost onClick={handleCancelClick}>
          {locale.en.common.button.cancel}
        </Button.Ghost>

        <Button.Classic onClick={handleDeleteClick}>
          {locale.en.common.button.delete}
        </Button.Classic>
      </ButtonGroup>
    </Wrapper>
  );
}