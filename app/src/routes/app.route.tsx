import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons'

import {Home} from '../screens/Home/index';
import {Search} from '../screens/Search/index';
import {User} from '../screens/User/index';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
      <Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
      >
        <Screen 
        name='Home' 
        component={Home}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Screen 
        name='Buscar' 
        component={Search}
        />
        <Screen 
        name='Usuário' 
        component={User}
        />
      </Navigator>
  );    
}