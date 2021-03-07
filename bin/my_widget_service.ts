#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MyWidgetServiceStack } from '../lib/my_widget_service-stack';

const app = new cdk.App();
new MyWidgetServiceStack(app, 'MyWidgetServiceStack',{env:{account:'554416834557', region:'ca-central-1'}});
