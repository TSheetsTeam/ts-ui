import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/Menu.story.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
