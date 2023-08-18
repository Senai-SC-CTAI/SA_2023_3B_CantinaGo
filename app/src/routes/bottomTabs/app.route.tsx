import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons'

import {Home} from '../../screens/Home';
import {Search} from '../../screens/Search';
import {User} from '../../screens/User';
import { Feedback } from '../../screens/Feedback'

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
      <Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#FA321A',
        tabBarStyle: {
          height: 72,
          paddingBottom: 0,
          borderTopWidth: 0, // Remove a linha superior
          alignContent: 'center'
        },
        tabBarLabelStyle: {
          fontWeight: 'bold', // Define o texto em negrito
          paddingBottom: 20,
        },
        tabBarIconStyle: {
          marginBottom: -13, // Ajuste para reduzir o espaçamento vertical entre ícone e texto
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