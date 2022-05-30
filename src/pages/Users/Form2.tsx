import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { DatePicker } from 'react-widgets/cjs';

import Label from 'components/lib/Label';
import Input from 'components/lib/Input';

const Wrapper = styled.div`
  --gap: 15rem;
`;

const Title = styled.h3`
  font-weight: 600;
  margin-bottom: 15rem;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap);
`;

const Addresses = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap);

  flex-wrap: wrap;
  & > * { width: 50% }
`;

export default () => {

  const [addresses, setAddresses] = useState<string[]>([""]);

  return (
    <Wrapper>

      <div>
        <Title>General Information</Title>

        <FlexRow>
          <Label title="First Name">
            <Input />
          </Label>

          <Label title="Last Name">
            <Input />
          </Label>
        </FlexRow>

        <FlexRow>
          <Label title="Email">
            <Input />
          </Label>

          <Label title="Contact No">
            <Input />
          </Label>
        </FlexRow>

        <FlexRow>
          <Label title="National Id">
            <Input />
          </Label>

          <Label title="Date of birth">
            <DatePicker />
          </Label>
        </FlexRow>

        <FlexRow>
          <Label title="Department">
            <Input />
          </Label>

          <Label title="Designation">
            <Input />
          </Label>
        </FlexRow>

        <FlexRow>
          <Label title="Report to">
            <Input />
          </Label>

          <Label title="Status">
            <Input />
          </Label>
        </FlexRow>
      </div>

      <div>
        <Title>Contact Information</Title>

        <FlexRow>
          <Label title="Country">
            <Input />
          </Label>

          <Label title="State/Region">
            <Input />
          </Label>
        </FlexRow>

        <FlexRow>
          <Label title="City">
            <Input />
          </Label>

          <Label title="Postal Code">
            <Input />
          </Label>
        </FlexRow>

        <Addresses>
          {addresses.map((item, i) =>
            <Label title={`Address ${i}`} key={i}>
              <Input value={item} />
            </Label>
          )}
        </Addresses>
      </div>
    </Wrapper>
  );
}