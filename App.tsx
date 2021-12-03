import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Routes } from './src/routes';

//Fontes
import {  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_500Medium 
} from '@expo-google-fonts/poppins';


export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_400Regular,
    Poppins_500Medium
  });

  if (!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <>   
      <Routes />
    </>
  );
}

