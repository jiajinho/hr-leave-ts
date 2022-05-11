import React from 'react';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';

import locale from 'locale';

import Label from 'components/lib/Label';
import Input from 'components/lib/Input';
import TextArea from 'components/lib/TextArea';
import Button from 'components/lib/Button';
import XWithRing, { Wrapper as _XWithRing } from 'components/svg/XWithRing';

const Wrapper = styled.div`
  --gap: 20rem;

  position: relative;
  max-width: var(--form-max-width);
  padding: var(--container-padding);
  padding-top: 35rem;

  margin: 0 auto;
  background: var(--container-bg-color);
  border-radius: var(--container-border-radius);

  display: flex;
  flex-direction: column;
  gap: var(--gap);

  & > ${_XWithRing} {
    position: absolute;
    top: 12rem;
    right: 12rem;
    height: 20rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  gap: var(--gap);
`;

const ButtonGroup = styled.div`
  margin-top: 20rem;
  align-self: end;

  display: flex;
  gap: 10rem;
`;

export default ({
  name,

  comments,

  okText,
  onOk,

  cancelText,
  onCancel
}: {
  name: [string, (s: string) => void],

  comments: [string, (s: string) => void],

  okText: string,
  onOk?: () => void,

  cancelText?: string,
  onCancel?: () => void
}) => {

  const navigate = useNavigate();

  return (
    <Wrapper>
      <XWithRing
        color="var(--primary-color)"
        onClick={() => navigate(-1)}
      />

      <FlexContainer>
        <Label title={locale.en.settings.department.form.name}>
          <Input
            value={name[0]}
            onChange={name[1]}
          />
        </Label>

        <Label title={locale.en.settings.department.form.status}>
          <Input />
        </Label>
      </FlexContainer>

      <Label title={locale.en.settings.department.form.comments}>
        <TextArea
          value={comments[0]}
          onChange={comments[1]}
        />
      </Label>

      <ButtonGroup>
        {cancelText &&
          <Button.Ghost onClick={onCancel}>
            {cancelText}
          </Button.Ghost>
        }

        <Button.Classic onClick={onOk}>
          {okText}
        </Button.Classic>
      </ButtonGroup>
    </Wrapper>
  );
}