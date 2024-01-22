import { Meta, StoryObj  } from '@storybook/react';
import Alert from './Alert';

const meta = {
  title: 'Common/Alerts',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
    tags: ['autodocs'],
    argTypes: {
      message: {control: 'text'},
        title: {control:'text'},
        sx: {control:'object'},
        type: {description:'Select a type of alert'}
    }

} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Success:Story = {
 args: {
   title: 'My alert title!',
   message: 'Success alert sample text.',
   type: 'success',
 }
}
export const Warning:Story = {
 args: {
   title: 'My alert title!',
   message: 'Warning alert sample text.',
   type: 'warning',
 }
}
export const Error:Story = {
 args: {
   title: 'My alert title!',
   message: 'Error alert sample text.',
   type: 'error',
 }
}
export const Info:Story = {
 args: {
   title: 'My alert title!',
   message: 'Info alert sample text.',
   type: 'info',
 }
}
