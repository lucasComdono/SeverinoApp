import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text } from 'react-native';
import { styles } from './styles';

import { SignMessageButton } from '../../components/SignMessageButton';
import { ButtonBasic } from '../../components/ButtonBasic';
import { SignInput } from '../../components/SignInput';
import { Topbar } from '../../components/Topbar';


export function SignUpEmpresa() {

    const[nameField, setNameField] = useState('');
    const[emailField, setEmailField] = useState('');
    const[phoneField, setPhoneField] = useState('');  

    const navigation = useNavigation();

    function handleSignUp(){
        navigation.navigate('SignUpPassword');
    }
    function handleMessageButton(){
        navigation.navigate('Preload');
    }

    return (
        <View style={styles.container}>
            <Topbar/>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Cadastre seu Negócio
                </Text>
                <Text style={styles.subtitle}>
                    Preencha com seus dados.
                </Text>
            </View>
            <View>
                <SignInput
                    name="briefcase"
                    placeholder="Nome do negócio"
                    onChangeText={(t: React.SetStateAction<string>)=>setNameField(t)}

                    value={nameField}            
                />
                <SignInput
                    name="mail"
                    placeholder="E-mail profissional"
                    onChangeText={(t: React.SetStateAction<string>)=>setEmailField(t)}
                  
                    value={emailField}
                />
                <SignInput
                    name="phone"
                    placeholder="Telefone profissional"
                    onChangeText={(t: React.SetStateAction<string>)=>setPhoneField(t)}
                   
                    value={phoneField}
                />
                <ButtonBasic
                    title="Continuar cadastro" 
                    activeOpacity={0.8}
                    onPress={handleSignUp}
                />    
            </View>
        </View>
    );

}
