import React from 'react';
import styled from 'styled-components/macro';

import type { Mention } from 'pages/MyRequest/types';

import locale from 'locale';
import Label from 'components/lib/Label';
import Input from 'components/lib/Input';
import TextArea from 'components/lib/TextArea';
import Button from 'components/lib/Button';
import Multiselect from 'components/common/Multiselect';
import DateRangePicker from 'components/common/DateRangePicker';

import mockData from 'pages/MyRequest/mock-data';

export const Wrapper = styled.div`
  --gap: 20rem;

  padding: var(--container-padding);
  padding-top: 30rem;
  background: var(--container-bg-color);
  border-radius: var(--container-border-radius);

  display: flex;
  flex-direction: column;
  gap: 25rem;
`;

const Container = styled.div`
  display: flex;
  gap: var(--gap);

  & > * { width: 100% }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: end;
  gap: 10rem;
`;

export default ({
  start,
  end,
  duration,
  reason,
  status,
  recipients,
  approvers,
  approverComment
}: {
  start: number,
  end: number,
  duration: string,
  reason: string,
  status: string,
  recipients: Mention[],
  approvers: Mention[],
  approverComment: string
}) => {
  return (
    <Wrapper>
      <DateRangePicker
        start={{
          value: new Date(start * 1000),
          readOnly: true
        }}

        end={{
          value: new Date(end * 1000),
          readOnly: true
        }}
      />

      <Container>
        <Label title={locale.en.myRequest.duration}>
          <Input value={duration} />
        </Label>

        <Label title={locale.en.myRequest.reason}>
          <Input value={reason} />
        </Label>
      </Container>

      <Container>
        <Label title={locale.en.myRequest.status}>
          <Input value={status} />
        </Label>

        <Label title={locale.en.myRequest.recipient}>
          <Multiselect<Mention>
            dataKey="value"
            textField="display"
            data={mockData.mentions}
            defaultValue={recipients}
            readonly
          />
        </Label>
      </Container>

      <Container>
        <Label title={locale.en.myRequest.approver}>
          <Multiselect<Mention>
            dataKey="value"
            textField="display"
            data={mockData.mentions}
            defaultValue={approvers}
            readonly
          />
        </Label>

        <span />
      </Container>

      <Label title="Approver's Comment">
        <TextArea value={approverComment} />
      </Label>

      <ButtonGroup>
        <Button.Ghost>
          {locale.en.common.button.cancel}
        </Button.Ghost>

        <Button.Classic>
          {locale.en.common.button.send}
        </Button.Classic>
      </ButtonGroup>
    </Wrapper>
  );
}

