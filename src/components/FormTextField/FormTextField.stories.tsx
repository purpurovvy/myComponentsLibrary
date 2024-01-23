import { Meta, StoryObj  } from '@storybook/react';
import FormTextField from './FormTextField';
import {FormContextDecorator} from "../../utils/FormContextDecorator";

const meta:Meta<typeof FormTextField> = {
  title: 'Forms/FormTextField',
  component: FormTextField,
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
    name: 'MyFormInput',
    isErrorTextVisible: true,
  }
}