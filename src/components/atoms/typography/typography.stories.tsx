import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Typography from './typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  children: 'Basic Typography',
};

export const Polymorphism = Template.bind({});
Polymorphism.args = {
  children: 'Polymorphism Typography',
  as: 'a',
};
