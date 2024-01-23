import { Meta, StoryObj  } from '@storybook/react';
import {FormContextDecorator} from "../../utils/FormContextDecorator";
import React from "react";
import FormCheckbox from "./FormCheckbox";

const meta:Meta<typeof FormCheckbox> = {
  title: 'Forms/FormCheckbox',
  component: FormCheckbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {control: 'text'},
    name: {control:'text'},
    isErrorTextVisible: {control: 'boolean'},
  },
  decorators: [
    (Story) => (
        <FormContextDecorator>
          <Story />
        </FormContextDecorator>
    ),
  ],
}

export default meta;
type Story = StoryObj<typeof meta>;


export const Default:Story = {
  args: {
    label: 'My Label',
    name: 'MyFormCheckbox',
    isErrorTextVisible: true,
  }
}