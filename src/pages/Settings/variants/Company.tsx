import React from 'react';
import styled from 'styled-components/macro';
import { DatePicker } from 'react-widgets/cjs';

import locale from 'locale';

import Label from 'components/lib/Label';
import Input from 'components/lib/Input';
import AddressInputs from 'components/common/AddressInputs';
import EditPen, { Wrapper as _EditPen } from 'components/svg/EditPen';

const Wrapper = styled.div`
  --gap: 20rem;

  position: relative;
  max-width: var(--form-max-width);
  padding: var(--container-padding);

  margin: 0 auto;
  background: var(--container-bg-color);
  border-radius: var(--container-border-radius);

  display: flex;
  flex-direction: column;
  gap: var(--gap);

  ${_EditPen} {
    height: 20rem;
    align-self: end;
    cursor: pointer;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  gap: var(--gap);
`;

export default () => {

  return (
    <Wrapper>

      <EditPen />

      <FlexContainer>
        <Label title={locale.en.settings.company.name}>
          <Input />
        </Label>

        <Label title={locale.en.settings.company.alias}>
          <Input />
        </Label>
      </FlexContainer>

      <FlexContainer>
        <Label title={locale.en.settings.company.incorporationDate}>
          <DatePicker />
        </Label>

        <Label title={locale.en.settings.company.contactNo}>
          <Input />
        </Label>
      </FlexContainer>

      <FlexContainer>
        <Label title={locale.en.settings.company.nationalId}>
          <Input />
        </Label>

        <Label title={locale.en.settings.company.stateRegion}>
          <Input />
        </Label>
      </FlexContainer>

      <FlexContainer>
        <Label title={locale.en.settings.company.city}>
          <Input />
        </Label>

        <Label title={locale.en.settings.company.postalCode}>
          <Input />
        </Label>
      </FlexContainer>

      <AddressInputs />

    </Wrapper>
  )
}