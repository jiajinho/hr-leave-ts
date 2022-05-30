import React from 'react';
import styled from 'styled-components/macro';

import Label from 'components/lib/Label';
import Input from 'components/lib/Input';
import TextArea from 'components/lib/TextArea';
import Button from 'components/lib/Button';
import DateRangePicker from 'components/common/DateRangePicker';

import Card from 'components/common/Card';
import { Wrapper as _Card } from 'components/common/Card/styled';

const Wrapper = styled.div`
  --gap: 20rem;

  display: flex;
  align-items: start;
  justify-content: center;
  gap: var(--gap);

  ${_Card} { flex-grow: 1 }
`;

const Form = styled.div`
  flex-grow: 1;

  padding: var(--container-padding);
  border-radius: var(--container-border-radius);
  background: var(--container-bg-color);

  display: flex;
  flex-direction: column;
  gap: var(--gap);

  & > div {
    display: flex;
    gap: var(--gap);
  }

  & span { width: 100% }
`;


const ButtonGroup = styled.div`
  align-self: end;
`;

export default ({
  name,
  supervisor,
  start,
  end,
  type,
  duration,
  reason,
  comments,
  button
}: {
  name: [string, (s: string) => void],
  supervisor: [string, (s: string) => void],
  start: [Date | undefined, (d: Date | undefined) => void],
  end: [Date | undefined, (d: Date | undefined) => void],
  type: [string, (s: string) => void],
  duration: [number, (n: number) => void],
  reason: [string, (s: string) => void],
  comments: [string, (s: string) => void],
  button?: {
    onReject: () => void,
    onModify: () => void
  }
}) => {



  return (
    <Wrapper>

      <Form>
        <div>
          <Label title="Username">
            <Input
              value={name[0]}
              onChange={name[1]}
            />
          </Label>

          <Label title="Supervisor">
            <Input />
          </Label>
        </div>

        <DateRangePicker />

        <div>
          <Label title="Type of Leave">
            <Input />
          </Label>

          <Label title="Leave Duration">
            <Input />
          </Label>
        </div>

        <div>
          <Label title="Leave Reason">
            <Input />
          </Label>

          <span />
        </div>

        <div>
          <Label title="Comments">
            <TextArea />
          </Label>
        </div>

        {button &&
          <ButtonGroup>
            <Button.Ghost
              hoverColor="red"
              onClick={button.onReject}
            >
              Reject
            </Button.Ghost>

            <Button.Classic onClick={button.onModify}>
              Modify
            </Button.Classic>
          </ButtonGroup>
        }
      </Form>

      <Card.Statistic.Leave
        title="Leave Record"
        consumed="12"
        remaining="08"
        leaves={[
          { legend: "Turkey", color: "red", percentage: 30 }
        ]}
      />

    </Wrapper>
  );
}