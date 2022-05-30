import React from 'react';

import locale from 'locale';
import type { Department } from 'schema';

import { Wrapper, Description, ButtonGroup } from 'components/lib/Modal/styled';
import Button from 'components/lib/Button';

export default ({ setModalVisible, department }: {
  setModalVisible: (b: boolean) => void,
  department?: Department
}) => {

  const handleCancelClick = () => {
    setModalVisible(false);
  }

  const handleDeleteClick = () => {
    console.log(department);
  }

  let description = locale.en.settings.department.deleteDesc;

  if (department) {
    description = description.replace('{{ 1 }}', department.name);
  }

  return (
    <Wrapper>
      <Description>
        {description}
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