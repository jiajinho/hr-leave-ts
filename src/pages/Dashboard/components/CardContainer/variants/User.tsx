import React from 'react';

import locale from 'locale';

import { Wrapper } from '../styled';
import Card from 'components/common/Card';

export default () => {
  return (
    <Wrapper>
      <Card.Statistic.Classic
        title={locale.en.dashboard.user.myRequests}
        consumed="12"
        remaining="8"
        percentage={70}
        onPlusClick={() => console.log("clicked plus!")}
      />

      <Card.Statistic.Classic
        title={locale.en.dashboard.user.myApprovals}
        consumed="02"
        remaining="04"
        percentage={50}
      />
    </Wrapper>
  );
}