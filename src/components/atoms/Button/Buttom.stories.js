import React from 'react';
import { storiesOf } from '@storybook/react/demo';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

export default { title: 'Button', decorators: [withKnobs] };

export const Primary = () => {
  const label = 'Color';
  const options = {
    primary: 'hsl(49,100%,58%)',
    secondary: 'hsl(196,83%,75%)',
    teriary: 'hsl(106,47%,64%)',
  };
  const defaultValue = 'hsl(49,100%,58%)';
  const groupId = 'GROUP-ID1';
  const value = select(label, options, defaultValue, groupId);

  return <Button color={value}>Hello Button</Button>;
};

export const Secondary = () => <Button secondary>Hello</Button>;
