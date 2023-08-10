import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabRoutes } from '../bottomTabs/app.route';
import { SignIn } from '../../screens/SingIn';
import { SignUp } from '../../screens/SingUp';

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
        name='Cadastrar' 
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
       <Screen 
        name='Route' 
        component={TabRoutes}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  )
}

