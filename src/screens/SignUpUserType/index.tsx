import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text } from 'react-native';
import { styles } from './styles';

import { UserTypeButton } from '../../components/UserTypeButton';


export function SignUpUserType() {


    const navigation = useNavigation();

    function handleTypeClient(){
        navigation.navigate('SignUpInterest');
    }
    function handleTypeEmpresa(){
        navigation.navigate('SignUpEmpresa');
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Escolha seu tipo de conta
                </Text>
                <Text style={styles.subtitle}>
                    Escolha cliente se estiver buscando serviços ou empresa para vender seus serviços.
                </Text>
            </View>
            <View>
                <UserTypeButton
                    title="Cliente"
                    subtitle="Quero encontrar serviços"
                    style={styles.cliente} 
                    icon={'user'}
                    onPress={handleTypeClient}
                />
                <Text style={styles.splitText}>
                - Ou -
                </Text>                  
                <UserTypeButton
                    title="Empreendedor"
                    style={styles.empreendedor} 
                    subtitle="Quero anunciar meu serviços"
                    icon={'briefcase'}   
                    onPress={handleTypeEmpresa}      
                />
            </View>
        </View>
    );

}
