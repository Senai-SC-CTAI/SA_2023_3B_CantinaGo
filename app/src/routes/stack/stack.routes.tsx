import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TabRoutes } from '../bottomTabs/app.route';
import { SignIn } from '../../screens/SignIn';
import { SignUp } from '../../screens/SignUp';
import { User } from '../../screens/User';
import { Search } from '../../screens/Search';
import { Food } from '../../screens/Food';
import { Category } from '../../screens/Category'
import { Feedback } from '../../screens/Feedback';
import { ComidaScroll } from '../../components/ComidaScroll';

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator initialRouteName="SignIn">
      <Screen 
        name='SignIn' 
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Screen 
        name='SignUp' 
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
      <Screen 
        name='User' 
        component={User}
        options={{
          headerShown: false,
        }}  
      />
      <Screen 
        name='Search' 
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Screen 
        name='Food' 
        component={Food}
        options={{
          headerShown: false,
        }}
      /> 
      <Screen 
        name='Category' 
        component={Category}
        options={{
          headerShown: false,
        }}
      /> 
      <Screen 
      name='Feedback' 
      component={Feedback}
      options={{
        headerShown: false,
      }}
    />
    <Screen 
  name='ComidaScroll' 
  component={ComidaScroll}
  options={{
    headerShown: false,
  }}
/>
    </Navigator>
  )
}

