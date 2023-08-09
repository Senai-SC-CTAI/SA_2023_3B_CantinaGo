import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { TabRoutes } from './app.route';

export function Routes() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  )
}