import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Routes } from '../bottomTabs';


const { Screen, Navigator } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen 
          name='Entrar' 
          component={Routes}
      />
    </Navigator>
  )
}
