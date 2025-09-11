import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from 'components/InputField/InputField';

const meta: Meta = {
  title: 'Debug/AliasCheck',
  render: () => <InputField label="OK" placeholder="Alias works" />,
  tags: ['autodocs'],
};
export default meta;

export const Check: StoryObj = {};
