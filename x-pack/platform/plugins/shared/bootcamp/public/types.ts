/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

// Type for the public setup contract - whatever we want to expose to other plugins
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BootcampPublicSetup {}

// Type for public start contract - exposed to other plugins
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BootcampPublicStart {}

// type for the public setup contract dependencies - whaterver this plugin depends on during setup
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BootcampPublicPluginSetup {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BootcampPublicPluginStart {}
