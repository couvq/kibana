/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { AppMountParameters, CoreStart } from '@kbn/core/public';
import { Router } from '@kbn/shared-ux-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { BootcampAppContextProvider } from '../hooks/use_kibana';
import type { BootcampPublicPluginStart } from '../types';
import { BootcampApp } from './bootcamp_app';

export const renderApp = (
  coreStart: CoreStart,
  pluginsStart: BootcampPublicPluginStart,
  params: AppMountParameters
) => {
  const { element, history } = params;

  ReactDOM.render(
    <BootcampAppContextProvider coreStart={coreStart} pluginsStart={pluginsStart} params={params}>
      <Router history={history}>
        <BootcampApp />
      </Router>
    </BootcampAppContextProvider>,
    element
  );

  return () => ReactDOM.unmountComponentAtNode(element);
};
