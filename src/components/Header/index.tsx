import React from 'react';
import styled from 'styled-components/macro';

import locale from '../../locale';

import Switcheroo from '../svg/Switcheroo';
import useNavStore from '../../stores/useNavStore';
import Button from '../lib/Button';
import Dot3x3, { Wrapper as _Dot3x3 } from '../svg/Dot3x3';
import Profile from './components/Profile';

const Wrapper = styled.header`
  position: relative;
  padding: 15rem 0;
  border-bottom: 1rem solid #ccc;

  display: flex;
  align-items: center;
  gap: 20rem;

  ${_Dot3x3} { width: 18rem }
`;

const Title = styled.h1`
  flex-grow: 1;
`;

const Divider = styled.div`
  position: relative;
  width: 1rem;
  height: 35rem;
  background: #ccc;
`;

export default () => {
  const route = useNavStore(state => state.current);

  return (
    <Wrapper>
      <Title>
        {route?.display.header}
      </Title>

      <Button.Classic SVGElement={Switcheroo}>
        {locale.en.header.switchUser}
      </Button.Classic>

      <Dot3x3 color="var(--primary-color)" />

      <Divider />

      <Profile
        imgSrc="/static/pepega.jpg"
        name="Geovanni"
        position="Superadmin"
      />
    </Wrapper>
  );
}