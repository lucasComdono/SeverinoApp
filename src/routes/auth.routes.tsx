import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

//Importar Telas
import { Home } from '../screens/Home';
import { Preload } from '../screens/Preload';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { SignUpPassword } from '../screens/SignUpPassword';
import { SignUpUserType } from '../screens/SignUpUserType';
import { SignUpInterest } from '../screens/SignUpInterest';
import { SignUpEmpresa } from '../screens/SignUpEmpresa';
import { Search } from '../screens/Search';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Definir parametros para Telas
export type RootStackParamList = {
    SignIn: undefined;
    Home: undefined;
    Preload: undefined;
    SignUp: undefined;
    SignUpPassword: undefined;
    SignUpUserType: undefined;
    SignUpInterest: undefined;
    SignUpEmpresa: undefined;
    Search: undefined;
  };

type Props = BottomTabNavigationProp<RootStackParamList>;

const Bottom = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

export function Tabs() {
    return (

            <Bottom.Navigator
            screenOptions={{ 
                headerShown: false,
                tabBarShowLabel: false

            }}
            >
                <Bottom.Screen 
                name="SignIn" 
                component={SignIn} 
                />
        
                <Bottom.Screen  
                name="Home" 
                component={Preload} 
                />

            </Bottom.Navigator>
     
    );  
}

export function AuthRoutes() {
    return (
        <Stack.Navigator
        screenOptions={{ 
            headerShown: false,
            contentStyle: {
            backgroundColor: 'transparent'
            }
        }}
        >
            <Stack.Screen 
            name="Preload" 
            component={Preload} 
            />
            <Stack.Screen 
            name="SignIn" 
            component={SignIn} 
            />
            <Stack.Screen  
            name="SignUpInterest" 
            component={SignUpInterest} 
            />
            <Stack.Screen  
            name="SignUpEmpresa" 
            component={SignUpEmpresa} 
            />
            <Stack.Screen  
            name="SignUpUserType" 
            component={SignUpUserType} 
            />
            <Stack.Screen  
            name="SignUp" 
            component={SignUp} 
            />
            <Stack.Screen  
            name="SignUpPassword" 
            component={SignUpPassword} 
            />
            <Stack.Screen  
            name="Search" 
            component={Search} 
            />
            <Stack.Screen  
            name="Home" 
            component={Home} 
            />
        </Stack.Navigator>
    );  
}
