import React from 'react';

import locale from 'locale';

import { Wrapper } from '../styled';
import Card from 'components/common/Card';

export default () => {

  return (
    <Wrapper>
      <Card.Numeric
        title={locale.en.dashboard.admin.totalUsers}
        number={275}
      />

      <Card.Numeric
        title={locale.en.dashboard.admin.pendingMod}
        number={13}
      />
    </Wrapper>
  );
}