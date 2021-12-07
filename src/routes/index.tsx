import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes, Tabs } from './auth.routes';



export function Routes(){
    return(
        <NavigationContainer>
            <AuthRoutes/>
        </NavigationContainer>
    );
}