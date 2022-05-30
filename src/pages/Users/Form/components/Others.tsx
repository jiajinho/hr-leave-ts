import React from 'react';
import styled from 'styled-components/macro';

import locale from 'locale';
import { Title, FlexContainer } from '../styled';

import Label from 'components/lib/Label';
import Input from 'components/lib/Input';

const Section = styled.section`
  display: grid !important;
  grid-template-columns: 1fr 1fr;

  ${Title} {
    margin-bottom: var(--gap);
  }
`;

export default () => {

  return (
    <Section>
      <div>
        <Title>
          {locale.en.users.form.others.roles.title}
        </Title>

        <Label title={locale.en.users.form.others.roles.field}>
          <Input />
        </Label>
      </div>

      <div>
        <Title>
          {locale.en.users.form.others.permission.title}
        </Title>

        <Label title={locale.en.users.form.others.permission.field}>
          <Input />
        </Label>
      </div>

      <div>
        <Title>
          {locale.en.users.form.others.workDay.title}
        </Title>

        <Label title={locale.en.users.form.others.workDay.field}>
          <Input />
        </Label>
      </div>
    </Section>
  );
}