import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import locale from 'locale';

import X, { Wrapper as _X } from 'components/svg/X';
import Label from 'components/lib/Label';
import Input from 'components/lib/Input';
import DateRangePicker from 'components/common/DateRangePicker';
import TextArea from 'components/lib/TextArea';
import Button from 'components/lib/Button';

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

  & > ${_X} {
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

const ButtonGroup = styled.div(({ $hide }: {
  $hide: boolean
}) => `
  margin-top: 30rem;

  display: flex;
  justify-content: end;
  gap: 10rem;

  ${$hide && `
    visibility: hidden;
  `}
`);

type Defaults = {
  username?: string,
  type?: string,
  start?: Date,
  end?: Date
  duration?: string,
  reason?: string,
  comments?: string
}

export default ({ readOnly = false, defaults }: {
  readOnly?: boolean,
  defaults?: Defaults
}) => {

  const [username, setUsername] = useState("");
  const [type, setType] = useState("");
  const [start, setStart] = useState<Date>();
  const [end, setEnd] = useState<Date>();
  const [duration, setDuration] = useState("");
  const [reason, setReason] = useState("");
  const [comments, setComments] = useState("");

  useEffect(() => {
    setUsername(defaults?.username || "");
    setType(defaults?.type || "");
    setStart(defaults?.start);
    setEnd(defaults?.end);
    setDuration(defaults?.duration || "");
    setReason(defaults?.reason || "");
    setComments(defaults?.comments || "");
  }, [defaults]);

  return (
    <Wrapper>
      <X
        color="var(--primary-color)"
        hasRing
        onClick={() => console.log("clickedX!")}
      />

      <FlexContainer>
        <Label title={locale.en.myApproval.username}>
          <Input
            value={username}
            onChange={setUsername}
            readOnly={readOnly}
          />
        </Label>

        <Label title={locale.en.myApproval.type}>
          <Input
            value={type}
            onChange={setType}
            readOnly={readOnly}
          />
        </Label>
      </FlexContainer>

      <DateRangePicker
        start={{
          value: start,
          readOnly
        }}

        end={{
          value: end,
          readOnly
        }}
      />

      <FlexContainer>
        <Label title={locale.en.myApproval.duration}>
          <Input
            value={duration}
            onChange={setDuration}
            readOnly={readOnly}
          />
        </Label>

        <Label title={locale.en.myApproval.reason}>
          <Input
            value={reason}
            onChange={setReason}
            readOnly={readOnly}
          />
        </Label>
      </FlexContainer>

      <Label title={locale.en.myApproval.comments}>
        <TextArea
          value={comments}
          onChange={setComments}
          readOnly={readOnly}
        />
      </Label>

      <ButtonGroup $hide={readOnly}>
        <Button.Ghost>
          {locale.en.myApproval.button.reject}
        </Button.Ghost>

        <Button.Classic>
          {locale.en.myApproval.button.approve}
        </Button.Classic>
      </ButtonGroup>
    </Wrapper>
  );
}