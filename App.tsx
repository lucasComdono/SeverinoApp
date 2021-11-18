import React from 'react';

import {  Poppins_700Bold, Poppins_600SemiBold, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Preload } from './src/screens/Preload';

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
      <Preload/>
    </>
  );
}

