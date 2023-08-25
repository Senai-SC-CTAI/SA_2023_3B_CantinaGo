import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { StackRoutes } from './stack.routes';

import { Home } from '../../screens/Home'


export function Stack() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}
