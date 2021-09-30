import { Story, Meta } from '@storybook/angular/types-6-0';
import { SignupComponent } from '../../../../app/modules/auth/pages/signup/signup.component';

export default {
  title: 'Pages/Auth/Sign-up',
  component: SignupComponent,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SignupComponent> = (args: SignupComponent) => ({
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {};
