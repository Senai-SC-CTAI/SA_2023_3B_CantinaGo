import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabRoutes } from '../bottomTabs/app.route';
import { SignIn } from '../../screens/SingIn';

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Entrar">
      <Screen 
        name='Entrar' 
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Screen 
        name='Home' 
        component={TabRoutes}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  )
}

export function ButtonWithStackRoutes() {
  return (
    <TouchableOpacity onPress={() => Routes}>
      <Text>Entrar</Text>
      <StackRoutes />
    </TouchableOpacity>
  );
}
