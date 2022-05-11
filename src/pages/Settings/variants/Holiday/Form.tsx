import React from 'react';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';

import Button from 'components/lib/Button';
import Label from 'components/lib/Label';
import Input from 'components/lib/Input';
import TextArea from 'components/lib/TextArea';
import DateRangePicker from 'components/common/DateRangePicker';
import XWithRing, { Wrapper as _XWithRing } from 'components/svg/XWithRing';
import { Holiday } from './types';

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
  gap: 25rem;

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
  setName,

  duration,

  desc,
  setDesc,

  okText,
  cancelText
}: {
  name: string,
  setName?: (s: string) => void

  duration: string,

  desc: string
  setDesc?: (s: string) => void,

  okText: string,
  cancelText: string
}) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <XWithRing
        color="var(--primary-color)"
        onClick={() => navigate(-1)}
      />

      <FlexContainer>
        <Label title="Holiday Name">
          <Input
            value={name}
            onChange={s => setName && setName(s)}
          />
        </Label>

        <Label title="Total Duration">
          <Input />
        </Label>
      </FlexContainer>

      <DateRangePicker />

      <Label title="Description">
        <TextArea
          value={desc}
          onChange={s => setDesc && setDesc(s)}
        />
      </Label>

      <ButtonGroup>
        <Button.Ghost>
          {cancelText}
        </Button.Ghost>

        <Button.Classic>
          {okText}
        </Button.Classic>
      </ButtonGroup>
    </Wrapper>
  )
}