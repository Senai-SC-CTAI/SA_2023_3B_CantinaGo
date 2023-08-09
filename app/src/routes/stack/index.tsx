import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { StackRoutes } from './stack.routes';


export function Stack() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}
