import React from 'react';

import locale from 'locale';
import { Title, FlexContainer } from '../styled';

import Label from 'components/lib/Label';
import Input from 'components/lib/Input';

export default () => {

  return (
    <section>
      <Title>
        {locale.en.users.form.general.title}
      </Title>

      <FlexContainer>
        <Label title={locale.en.users.form.general.firstName}>
          <Input />
        </Label>

        <Label title={locale.en.users.form.general.lastName}>
          <Input />
        </Label>
      </FlexContainer>

      <FlexContainer>
        <Label title={locale.en.users.form.general.email}>
          <Input />
        </Label>

        <Label title={locale.en.users.form.general.contactNo}>
          <Input />
        </Label>
      </FlexContainer>

      <FlexContainer>
        <Label title={locale.en.users.form.general.department}>
          <Input />
        </Label>

        <Label title={locale.en.users.form.general.designation}>
          <Input />
        </Label>
      </FlexContainer>

      <FlexContainer>
        <Label title={locale.en.users.form.general.reportTo}>
          <Input />
        </Label>

        <Label title={locale.en.users.form.general.status}>
          <Input />
        </Label>
      </FlexContainer>
    </section>
  );
}