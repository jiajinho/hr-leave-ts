import React from 'react';

import locale from 'locale';
import { Title, FlexContainer } from '../styled';

import Label from 'components/lib/Label';
import Input from 'components/lib/Input';
import AddressInputs from 'components/common/AddressInputs';

export default () => {



  return (
    <section>
      <Title>
        {locale.en.users.form.contact.title}
      </Title>

      <FlexContainer>
        <Label title={locale.en.users.form.contact.country}>
          <Input />
        </Label>

        <Label title={locale.en.users.form.contact.stateRegion}>
          <Input />
        </Label>
      </FlexContainer>

      <FlexContainer>
        <Label title={locale.en.users.form.contact.city}>
          <Input />
        </Label>

        <Label title={locale.en.users.form.contact.postalCode}>
          <Input />
        </Label>
      </FlexContainer>

      <AddressInputs />
    </section>
  );
}