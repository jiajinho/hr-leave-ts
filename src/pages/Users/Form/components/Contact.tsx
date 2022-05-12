import React from 'react';

import locale from 'locale';
import { Title, FlexContainer } from '../styled';

import Label from 'components/lib/Label';
import Input from 'components/lib/Input';

export default () => {



  return (
    <section>
      <Title>
        {locale.en.users.form.contact.title}
      </Title>


    </section>
  );
}