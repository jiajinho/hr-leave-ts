import React from 'react';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';
import { DropdownList } from 'react-widgets/cjs';

import locale from 'locale';

import X, { Wrapper as _X } from 'components/svg/X';
import Label from 'components/lib/Label';
import Button from 'components/lib/Button';
import _Button from 'components/lib/Button/styled';
import DateRangePicker from 'components/common/DateRangePicker';
import Input from 'components/lib/Input';
import TextArea from 'components/lib/TextArea';
import Multiselect from 'components/common/Multiselect';

import mock from '../mock-data';
import { Mention } from 'pages/MyRequest/types';

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

  ${_Button} { align-self: end }
`;

const FlexContainer = styled.div`
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

      <FlexContainer>
        <Label title={locale.en.myRequest.duration}>
          <Input />
        </Label>

        <Label title={locale.en.myRequest.reason}>
          <Input />
        </Label>
      </FlexContainer>

      <Label title="asdsad">
        <TextArea />
      </Label>

      <FlexContainer>
        <Label title={locale.en.myRequest.approver}>
          <Multiselect<Mention>
            dataKey="value"
            textField="display"
            data={mock.mentions}
            bgColor="#45BF4322"
            color="#45BF43"
          />
        </Label>

        <Label title={locale.en.myRequest.recipient}>
          <Multiselect<Mention>
            dataKey="value"
            textField="display"
            data={mock.mentions}
            bgColor="#FF424222"
            color="#FF4242"
          />
        </Label>
      </FlexContainer>

      <Button.Classic>
        {locale.en.common.button.submit}
      </Button.Classic>
    </Wrapper>
  );
}