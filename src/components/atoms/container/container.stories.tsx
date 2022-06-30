import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Container from './container';

export default {
  title: 'Atoms/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  children: 'Basic Container',
};
