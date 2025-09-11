import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    helperText: "This is a helper text",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    invalid: true,
    errorMessage: "Invalid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Username",
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    clearable: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InputField label="Filled" variant="filled" placeholder="Filled variant" />
      <InputField label="Outlined" variant="outlined" placeholder="Outlined variant" />
      <InputField label="Ghost" variant="ghost" placeholder="Ghost variant" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InputField label="Small" size="sm" placeholder="Small size" />
      <InputField label="Medium" size="md" placeholder="Medium size" />
      <InputField label="Large" size="lg" placeholder="Large size" />
    </div>
  ),
};
