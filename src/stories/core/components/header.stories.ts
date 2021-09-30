import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeaderComponent } from '../../../app/core/components/header/header.component';

export default {
  title: 'Core/Components/Header',
  component: HeaderComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {};
