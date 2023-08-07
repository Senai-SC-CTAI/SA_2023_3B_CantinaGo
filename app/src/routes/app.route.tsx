import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons'
import { Text } from 'react-native'; 

import {Home} from '../screens/Home/index';
import {Search} from '../screens/Search/index';
import {User} from '../screens/User/index';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
      <Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#FA321A',
        tabBarStyle: {
          paddingBottom: 5,
          borderTopWidth: 0, // Remove a linha superior
        },
        tabBarLabelStyle: {
          fontWeight: 'bold', // Define o texto em negrito
          paddingBottom: 10,
        },
      }}
      >
        <Screen 
        name='Home' 
        component={Home}
        options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),    
          }}
        />
        <Screen 
        name='Buscar' 
        component={Search}
        options={{
          tabBarLabel: 'Buscar',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" color={color} size={size} />
          ),
        }}
        />
        <Screen 
        name='Usuário' 
        component={User}
        options={{
          tabBarLabel: 'Usuário',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
        />
      </Navigator>
  );    
}