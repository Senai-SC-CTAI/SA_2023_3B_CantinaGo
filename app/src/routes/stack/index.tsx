import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { ButtonWithStackRoutes } from './stack.routes'

import { StackRoutes } from './stack.routes';


export function Stack() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}
