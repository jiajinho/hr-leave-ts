import React from 'react';
import styled from 'styled-components/macro';
import { Multiselect as WidgetMultiselect } from 'react-widgets/cjs';

const Multiselect = styled(WidgetMultiselect)(({
  $bgColor,
  $color
}: {
  $bgColor?: string,
  $color?: string
}) => `
  ${$bgColor ? `
  & .rw-multiselect-tag {
    background: lightpink;
  }
  `: ''}

  ${$color ? `
  & .rw-multiselect-tag,
  & button svg {
    color: ${$color};
  }
  `: ''}
`);

export default <T extends { [k: string]: any }>({
  dataKey,
  textField,
  defaultValue,
  data,
  bgColor,
  color,
  readonly = false
}: {
  dataKey: keyof T,
  textField: keyof T,
  defaultValue?: T[],
  data: T[],
  bgColor?: string,
  color?: string,
  readonly?: boolean
}) => {
  return (
    <Multiselect
      dataKey={dataKey as string}
      textField={textField as string}
      defaultValue={defaultValue}
      data={data}
      $bgColor={bgColor}
      $color={color}
      readOnly={readonly}
    />
  );
}