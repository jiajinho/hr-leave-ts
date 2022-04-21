import React from 'react';
import styled from 'styled-components/macro';
import { DropdownList } from 'react-widgets/cjs';

import locale from '../../../../locale';
import Label from '../../../../components/common/Label';
import DateRangePicker from '../../../../components/common/DateRangePicker';
import Input from '../../../../components/common/Input';
import TextArea from '../../../../components/common/TextArea';

const Wrapper = styled.div`
  --gap: 20rem;

  padding: var(--container-padding);
  background: var(--container-bg-color);
  border-radius: var(--container-border-radius);

  display: flex;
  flex-direction: column;
  gap: 25rem;
`;

const Container = styled.div`
  display: flex;
  gap: var(--gap);
`;

export default () => {


  return (
    <Wrapper>

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

    </Wrapper>
  )
}