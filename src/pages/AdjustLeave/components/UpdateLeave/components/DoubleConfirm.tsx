import React from 'react';
import styled from 'styled-components/macro';

import locale from 'locale';

import { Wrapper, Description, ButtonGroup } from 'components/lib/Modal/styled';
import Button from 'components/lib/Button';

export default ({ setDoubleConfirm, onDoubleConfirm }: {
  setDoubleConfirm: (b: boolean) => void,
  onDoubleConfirm: () => void
}) => {


  return (
    <Wrapper>
      <Description>
        {locale.en.adjustLeave.modal.doubleConfirm}
      </Description>

      <ButtonGroup>
        <Button.Ghost onClick={() => setDoubleConfirm(false)}>
          {locale.en.adjustLeave.modal.button.cancel}
        </Button.Ghost>

        <Button.Classic onClick={onDoubleConfirm}>
          {locale.en.adjustLeave.modal.button.ok}
        </Button.Classic>
      </ButtonGroup>
    </Wrapper>
  );
}