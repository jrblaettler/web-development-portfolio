import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  className: 'bg-red-400 font-bold text-white px-6 py-2',
};
