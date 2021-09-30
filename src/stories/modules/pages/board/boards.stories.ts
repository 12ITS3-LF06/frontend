import { Story, Meta } from '@storybook/angular/types-6-0';
import { BoardsComponent } from '../../../../app/modules/boards/pages/boards/boards.component';

export default {
  title: 'Pages/Board/Boards',
  component: BoardsComponent,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<BoardsComponent> = (args: BoardsComponent) => ({
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {};
