import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components/macro';

import locale from 'locale';
import { Checks } from 'pages/AdjustLeave/types';

import Label from 'components/lib/Label';
import TextArea, { Wrapper as _TextArea } from 'components/lib/TextArea';
import Input, { Input as _Input } from 'components/lib/Input';
import { ButtonGroup } from 'components/lib/Modal/styled';
import Button from 'components/lib/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20rem;

  padding-top: 25rem;

  ${_TextArea} { width: 400rem }
  ${ButtonGroup} { align-self: end }
`;

const Title = styled.h3`
  font-weight: 600;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;

  ${_Input} {
    text-align: center;
  }
`;

const PlusMinusButton = styled.button`
  position: relative;  
  outline: none;
  border: 1rem solid #ccc;
  border-radius: 4rem;

  aspect-ratio: 1/1;
  height: 35rem;
  width: auto;

  font-size: 30rem;
  cursor: pointer;
  color: var(--primary-color);
  background: transparent;

  & > * {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }
`;


export default ({ checkboxes, leave, setLeave, visible, setVisible }: {
  checkboxes: Checks,
  leave: string,
  setLeave: (s: string) => void,
  visible: boolean,
  setVisible: (b: boolean) => void
}) => {
  /**
   * Hooks
   */
  const nameList = useMemo(() => {
    const list = [];

    for (const [k, v] of Object.entries(checkboxes)) {
      list.push(v.username);
    }

    return list;
  }, [Object.keys(checkboxes).length]);

  useEffect(() => {
    setLeave("0");
  }, [visible]);

  /**
   * Not hooks
   */
  const resolveLeave = () => {
    const n = parseInt(leave);

    if (isNaN(n)) return 0;
    else return n;
  }

  const plusClick = () => {
    const n = resolveLeave();
    setLeave(`${n + 1}`);
  }

  const minusClick = () => {
    const n = resolveLeave();
    setLeave(`${n - 1}`);
  }

  /**
   * Render
   */
  return (
    <Wrapper>
      <Title>
        {locale.en.adjustLeave.modal.title.replace("{{ 1 }}", nameList.join(", "))}
      </Title>

      <InputContainer>
        <PlusMinusButton onClick={minusClick}>
          <span>-</span>
        </PlusMinusButton>

        <Input
          value={leave}
          onChange={setLeave}
          onBlur={() => setLeave(`${resolveLeave()}`)}
        />

        <PlusMinusButton onClick={plusClick}>
          <span>+</span>
        </PlusMinusButton>
      </InputContainer>

      <Label title="Comments">
        <TextArea />
      </Label>

      <ButtonGroup>
        <Button.Ghost onClick={() => setVisible(false)}>
          {locale.en.common.button.cancel}
        </Button.Ghost>

        <Button.Classic>
          {locale.en.common.button.send}
        </Button.Classic>
      </ButtonGroup>
    </Wrapper>
  );
}