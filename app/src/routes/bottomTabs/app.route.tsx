import * as React from 'react';
import { Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../../screens/Home';
import { Search } from '../../screens/Search';
import { User } from '../../screens/User';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  const [selectedTab, setSelectedTab] = React.useState('Home'); // Initialize with default tab

  const tabIcons = {
    Home: {
      normal: require("../../../assets/Icons/Home.png"),
      selected: require("../../../assets/Icons/HomeVisi.png"),
    },
    Buscar: {
      normal: require("../../../assets/Icons/Buscar.png"),
      selected: require("../../../assets/Icons/BuscarVisi.png"),
    },
    Usuário: {
      normal: require("../../../assets/Icons/User.png"),
      selected: require("../../../assets/Icons/UserVisi.png"),
    },
  };

  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#FA321A',
        tabBarStyle: {
          height: 72,
          paddingBottom: 0,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          paddingBottom: 20,
        },
        tabBarIconStyle: {
          marginBottom: -13,
        },
      }}
    >
      <Screen 
        name='Home' 
        component={Home}
        listeners={() => ({
          focus: () => handleTabChange('Home'),
        })}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={selectedTab === 'Home' ? tabIcons.Home.selected : tabIcons.Home.normal}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            />
          ),    
        }}
      />
      <Screen 
        name='Buscar' 
        component={Search}
        listeners={() => ({
          focus: () => handleTabChange('Buscar'),
        })}
        options={{
          tabBarLabel: 'Buscar',
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={selectedTab === 'Buscar' ? tabIcons.Buscar.selected : tabIcons.Buscar.normal}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            />
          ),   
        }}
      />
      <Screen 
        name='Usuário' 
        component={User}
        listeners={() => ({
          focus: () => handleTabChange('Usuário'),
        })}
        options={{
          tabBarLabel: 'Usuário',
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={selectedTab === 'Usuário' ? tabIcons.Usuário.selected : tabIcons.Usuário.normal}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            />
          ),   
        }}
      />
    </Navigator>
  );    
}