/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { EuiLoadingSpinner, EuiPageTemplate } from '@elastic/eui';
import { Route, Routes } from '@kbn/shared-ux-router';
import { dynamic } from '@kbn/shared-ux-utility';
import React from 'react';

const HomePage = dynamic(() => import('../pages/home'), { fallback: <EuiLoadingSpinner /> });
const DashboardPage = dynamic(() => import('../pages/dashboard'), {
  fallback: <EuiLoadingSpinner />,
});

export function BootcampApp() {
  return (
    <EuiPageTemplate bottomBorder>
      <EuiPageTemplate.Header pageTitle="Bootcamp app" description="Bootcamp app description." />
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/dashboard/:dashboardId" component={DashboardPage} />
      </Routes>
    </EuiPageTemplate>
  );
}
