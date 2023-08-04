import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons'

import {Food} from '../screens/Food/index';
import {Home} from '../screens/Home/index';
import {Salgados} from '../screens/Salgados/index';
import {Search} from '../screens/Search/index';
import {SignIn} from '../screens/SignIn/index';
import {SignUp} from '../screens/SignUp/index';
import {User} from '../screens/User/index';

import { styles } from './styles';

const {Navigator, Screen} = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <View style={styles.container}>
        <Navigator
            screenOptions={{
                
            }}
            >
            <Screen
                name="Home"
                component={Home}
                options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialIcons
                    name="shopping-cart"
                    size={size}
                    color={color}
                    />
                )
                }}
            />
            <Screen
                name="Search"
                component={Search}
                options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialIcons
                    name="receipt"
                    size={size}
                    color={color}
                    />
                )
                }}
            />
            <Screen
                name="User"
                component={User}
                options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialIcons
                    name="backup"
                    size={size}
                    color={color}
                    />
                )
                }}
            />
        </Navigator>
    </View>
  );    
}