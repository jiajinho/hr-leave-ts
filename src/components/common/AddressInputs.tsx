import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import locale from 'locale';

import Label from 'components/lib/Label';
import Input from 'components/lib/Input';
import PlusCircle, { Wrapper as _PlusCircle } from 'components/svg/PlusCircle';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--gap, 0rem);

  ${_PlusCircle} {
    height: 18rem;
  }
`;

const Title = styled.label`
  display: flex;
  align-items: center;
  gap: 5rem;

  ${_PlusCircle} {
    transform: rotate(45deg);
    cursor: pointer;
  }
`;

export default ({ value, onChange }: {
  value?: string[],
  onChange?: (v: string[]) => void
}) => {
  /**
   * Hooks
   */
  const [addresses, setAddresses] = useState<string[]>([""]);

  useEffect(() => {
    value && setAddresses(value);
  }, [value]);

  useEffect(() => {
    onChange && onChange(addresses);
  }, [addresses]);

  /**
   * Not hook
   */
  const handleNewAddress = (index: number) => {
    const clone = [...addresses];
    clone.splice(index + 1, 0, "");

    setAddresses(clone);
  }

  const handleDeleteAddress = (index: number) => {
    const clone = [...addresses];
    clone.splice(index, 1);

    setAddresses(clone);
  }

  const handleAddressesChange = (s: string, index: number) => {
    const clone = [...addresses];
    clone[index] = s;

    setAddresses(clone);
  }

  /**
   * Render
   */
  return (
    <Wrapper>
      {addresses.map((ad, i) => {
        const title = (
          <Title>
            {`${locale.en.common.address} ${i > 0 ? (i + 1) : ''}`}
            {i > 0 && <PlusCircle onClick={() => handleDeleteAddress(i)} />}
          </Title>
        );

        const plusIcon = (
          <PlusCircle
            color="var(--primary-color)"
            onClick={() => handleNewAddress(i)}
          />
        );

        return (
          <Label key={i} title={title}>
            <Input
              value={ad}
              onChange={s => handleAddressesChange(s, i)}
              icon={plusIcon}
            />
          </Label>
        );
      })}
    </Wrapper>
  );
}