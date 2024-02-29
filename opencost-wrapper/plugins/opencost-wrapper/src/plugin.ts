import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const opencostWrapperPlugin = createPlugin({
  id: 'opencost-wrapper',
  routes: {
    root: rootRouteRef,
  },
});

export const OpencostWrapperPage = opencostWrapperPlugin.provide(
  createRoutableExtension({
    name: 'OpencostWrapperPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
