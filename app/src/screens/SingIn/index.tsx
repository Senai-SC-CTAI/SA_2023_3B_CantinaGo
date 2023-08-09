import * as React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Routes } from './routes'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function SignIn() {
  return (
    <View style={styles.container}>
  
    <Stack.Navigator>
      <Stack.Screen name="Hohme" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
    
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})