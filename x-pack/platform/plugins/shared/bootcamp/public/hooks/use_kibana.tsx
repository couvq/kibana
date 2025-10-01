/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { AppMountParameters, CoreStart } from '@kbn/core/public';
import {
  KibanaContextProvider,
  useKibana as useUntypedKibana,
} from '@kbn/kibana-react-plugin/public';
import type { PropsWithChildren } from 'react';
import React, { useMemo } from 'react';
import type { BootcampPublicPluginStart } from '../types';

interface BootcampKibanaContext {
  core: CoreStart;
  plugins: BootcampPublicPluginStart;
  params: AppMountParameters;
}

export const useKibana = () => {
  return useUntypedKibana<BootcampKibanaContext>().services;
};

interface BootcampAppContextProviderProps {
  coreStart: CoreStart;
  pluginStart: BootcampPublicPluginStart;
  params: AppMountParameters;
}

export const BootcampAppContextProvider = ({
  children,
  coreStart,
  pluginStart,
  params,
}: PropsWithChildren<BootcampAppContextProviderProps>) => {
  const servicesForContext = useMemo(() => {
    return { core: coreStart, plugins: pluginStart, params };
  }, [coreStart, pluginStart, params]);
  return <KibanaContextProvider services={servicesForContext}>{children}</KibanaContextProvider>;
};
