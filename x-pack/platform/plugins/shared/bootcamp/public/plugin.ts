/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { AppMountParameters } from '@kbn/core/public';
import {
  DEFAULT_APP_CATEGORIES,
  type CoreSetup,
  type CoreStart,
  type Plugin,
} from '@kbn/core/public';
import type {
  BootcampPublicPluginSetup,
  BootcampPublicPluginStart,
  BootcampPublicSetup,
  BootcampPublicStart,
} from './types';

export class BootcampPlugin implements Plugin {
  setup(coreSetup: CoreSetup, plugins: BootcampPublicPluginSetup): BootcampPublicSetup {
    coreSetup.application.register({
      id: 'bootcamp',
      title: 'Bootcamp',
      category: DEFAULT_APP_CATEGORIES.observability,
      appRoute: '/app/bootcamp',
      euiIconType: 'logoObservability',
      async mount(params: AppMountParameters) {
        const { renderApp } = await import('./application');
        const [coreStart, pluginsStart] = await coreSetup.getStartServices();
        return renderApp(coreStart, pluginsStart, params);
      },
    });
    return {};
  }

  start(coreStart: CoreStart, plugins: BootcampPublicPluginStart): BootcampPublicStart {
    return {};
  }
}
