import { Story, Meta } from '@storybook/angular/types-6-0';
import { SigninComponent } from '../../../../app/modules/auth/pages/signin/signin.component';

export default {
  title: 'Pages/Auth/Sign-in',
  component: SigninComponent,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SigninComponent> = (args: SigninComponent) => ({
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {};
