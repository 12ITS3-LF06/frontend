import { Story, Meta } from '@storybook/angular/types-6-0';
import { ProfileComponent } from '../../../../app/modules/user/pages/profile/profile.component';

export default {
  title: 'Pages/User/Profile',
  component: ProfileComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ProfileComponent> = (args: ProfileComponent) => ({
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {};
