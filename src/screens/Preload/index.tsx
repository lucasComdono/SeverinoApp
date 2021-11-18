import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles';

import Severino from '../../assets/logo.png';

import { ButtonBasic } from '../../components/ButtonBasic';

export function Preload(){
    return (
        <View style={styles.container}>
            <View>
                <Image 
                    source={Severino} 
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Severino App</Text>
                <Text style={styles.subtitle}>Aqui você encontra todos os serviços que precisa no seu dia a dia.</Text>
                <ButtonBasic
                    title="Vamos começar?" 
                    activeOpacity={0.8}
                />
            </View>
        </View> 
    );

}
