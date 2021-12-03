import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importar Telas
import { Home } from '../screens/Home';
import { Preload } from '../screens/Preload';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { SignUpPassword } from '../screens/SignUpPassword';
import { SignUpUserType } from '../screens/SignUpUserType';
import { SignUpInterest } from '../screens/SignUpInterest';
import { SignUpEmpresa } from '../screens/SignUpEmpresa';

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
  };

const { Navigator , Screen } = createNativeStackNavigator<RootStackParamList>();

export function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{ 
                headerShown: false,
                contentStyle: {
                    backgroundColor: 'transparent'
                }
            }}
        >
            <Screen 
            name="Preload" 
            component={Preload} 
            />
            <Screen 
            name="SignIn" 
            component={SignIn} 
            />
            <Screen 
            name="SignUpInterest" 
            component={SignUpInterest} 
            />
            <Screen 
            name="SignUpEmpresa" 
            component={SignUpEmpresa} 
            />
            <Screen 
            name="SignUpUserType" 
            component={SignUpUserType} 
            />
            <Screen 
            name="SignUp" 
            component={SignUp} 
            />
            <Screen 
            name="SignUpPassword" 
            component={SignUpPassword} 
            />
            <Screen 
            name="Home" 
            component={Home} 
            />
        </Navigator>
    );  
}