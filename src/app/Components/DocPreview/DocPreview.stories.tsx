import React from 'react';
import DocPreview from './DocPreview';

export default {
  component: DocPreview,
  title: 'Components/DocPreview',
};

export const Obi = (): JSX.Element => (
  <DocPreview
    title="Obi"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut placeat vel repellendus."
  />
);

export const Example = (): JSX.Element => (
  <DocPreview
    title="Example"
    text="Veniam aut placeat vel repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
  />
);
