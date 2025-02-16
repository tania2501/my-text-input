import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['text', 'search', 'password'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryInput: Story = {
  args: {
    type: 'text',
    label: 'Input',
    placeholder: 'input',
    disabled: false,
  },
}
export const SearchInput: Story = {
  args: {
    type: 'search',
    label: 'Input',
    placeholder: 'input',
    disabled: false,
  },
}
export const DisabledInput: Story = {
  args: {
    type: 'text',
    label: 'Disabled',
    placeholder: 'input',
    disabled: true,
  },
}
export const ErrorInput: Story = {
  args: {
    type: 'text',
    errorMessage: 'Error',
    label: 'Danger Input',
    placeholder: 'input',
    disabled: false,
  },
}
export const WarningInput: Story = {
  args: {
    type: 'text',
    warningMessage: 'Warning',
    label: 'Warning Input',
    placeholder: 'warning',
    disabled: false,
  },
}
export const PasswordInput: Story = {
  args: {
    type: 'password',
    label: 'Password Input',
    placeholder: 'password',
    disabled: false,
  },
}
