import React from 'react';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';
import { DropdownList } from 'react-widgets/cjs';

import locale from '../../../../locale';
import X, { Wrapper as _X } from '../../../../components/svg/X';
import Label from '../../../../components/lib/Label';
import Button from '../../../../components/lib/Button';
import _Button from '../../../../components/lib/Button/styled';
import DateRangePicker from '../../../../components/common/DateRangePicker';
import Input from '../../../../components/lib/Input';
import TextArea from '../../../../components/lib/TextArea';
import Mentions from '../../../../components/lib/Mentions';

import mock from '../../mock-data';

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
    top: 15rem;
    right: 15rem;
    height: 25rem; 
  }

  ${_Button} {
    align-self: end;
  }
`;

const Container = styled.div`
  display: flex;
  gap: var(--gap);
`;

export default () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <X
        color="var(--primary-color)"
        hasRing
        onClick={() => navigate(-1)}
      />

      <Label title={locale.en.myRequest.type}>
        <DropdownList
          placeholder="Select a reason"
          data={[
            "Casual Leave",
            "Annual Leave",
            "Unpaid Leave"
          ]}
        />
      </Label>

      <DateRangePicker />

      <Container>
        <Label title={locale.en.myRequest.duration}>
          <Input />
        </Label>

        <Label title={locale.en.myRequest.reason}>
          <Input />
        </Label>
      </Container>

      <Label title="asdsad">
        <TextArea />
      </Label>

      <Container>
        <Label title={locale.en.myRequest.approver}>
          <Mentions
            options={mock.mentions}
            onChange={console.log}
            tagColor={{
              fg: "#45BF43",
              bg: "#45BF4322"
            }}
          />
        </Label>

        <Label title={locale.en.myRequest.recipient}>
          <Mentions
            options={mock.mentions}
            onChange={console.log}
            tagColor={{
              fg: "#FF4242",
              bg: "#FF424222"
            }}
          />
        </Label>
      </Container>

      <Button.Classic>
        {locale.en.common.button.submit}
      </Button.Classic>
    </Wrapper>
  )
}