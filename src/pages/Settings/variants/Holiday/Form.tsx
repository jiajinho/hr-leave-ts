import React from 'react';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';
import { NumberPicker } from 'react-widgets/cjs';

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
  duration,
  start,
  end,
  desc,

  okText,
  onOk,
  cancelText,
  onCancel
}: {
  name: [string, (s: string) => void],
  duration: [number, (n: number) => void],
  start: [Date | undefined | null, (d: Date | undefined | null) => void],
  end: [Date | undefined | null, (d: Date | undefined | null) => void],
  desc: [string, (s: string) => void],

  okText: string,
  onOk?: () => void,

  cancelText: string,
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
        <Label title="Holiday Name">
          <Input
            value={name[0]}
            onChange={name[1]}
          />
        </Label>

        <Label title="Total Duration">
          <NumberPicker
            value={duration[0]}
            onChange={n => n && duration[1](n)}
          />
        </Label>
      </FlexContainer>

      <DateRangePicker
        start={{ value: start[0], onChange: d => start[1](d) }}
        end={{ value: end[0], onChange: d => end[1](d) }}
      />

      <Label title="Description">
        <TextArea
          value={desc[0]}
          onChange={desc[1]}
        />
      </Label>

      <ButtonGroup>
        <Button.Ghost onClick={onCancel}>
          {cancelText}
        </Button.Ghost>

        <Button.Classic onClick={onOk}>
          {okText}
        </Button.Classic>
      </ButtonGroup>
    </Wrapper>
  )
}