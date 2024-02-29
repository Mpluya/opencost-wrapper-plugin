import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { opencostWrapperPlugin, OpencostWrapperPage } from '../src/plugin';

createDevApp()
  .registerPlugin(opencostWrapperPlugin)
  .addPage({
    element: <OpencostWrapperPage />,
    title: 'Root Page',
    path: '/opencost-wrapper'
  })
  .render();
