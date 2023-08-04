import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import {TabRoutes} from '/tab.routes';

export function Routes(){
    return(
        <NavigationContainer>
            <TabRoutes />
        </NavigationContainer>

    )
}