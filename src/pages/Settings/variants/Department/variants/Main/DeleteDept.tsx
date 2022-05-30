import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import locale from 'locale';
import department from 'api/department';
import type { Department } from 'schema';

import { Wrapper, Description, ButtonGroup } from 'components/lib/Modal/styled';
import Button from 'components/lib/Button';

export default ({
  setModalVisible,
  department: _department
}: {
  setModalVisible: (b: boolean) => void,
  department: [Department | undefined, (d?: Department) => void]
}) => {
  /**
   * Hooks
   */
  const queryClient = useQueryClient();

  const mutation = useMutation(department.destroy, {
    onSuccess: () => {
      queryClient.invalidateQueries(department.queryKey);

      const message = locale.en.toastMessages.deleteSuccess.replace("{{ 1 }}", _department[0]?.name || '');
      toast.success(message);
      _department[1](undefined);
      setModalVisible(false);
    }
  });

  /**
   * Not hook
   */
  const handleCancelClick = () => {
    setModalVisible(false);
  }

  const handleDeleteClick = () => {
    if (_department[0]) {
      mutation.mutate(_department[0].id);
    }
  }

  let description = locale.en.settings.department.deleteDesc;

  if (_department[0]) {
    description = description.replace('{{ 1 }}', _department[0].name);
  }

  /**
   * Render
   */
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