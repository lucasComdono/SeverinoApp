import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text } from 'react-native';
import { styles } from './styles';

import { SignMessageButton } from '../../components/SignMessageButton';
import { ButtonBasic } from '../../components/ButtonBasic';
import { SignInput } from '../../components/SignInput';


export function SignUp() {

    const[nameField, setNameField] = useState('');
    const[emailField, setEmailField] = useState('');
    const[phoneField, setPhoneField] = useState('');  

    const navigation = useNavigation();

    function handleSignUp(){
        navigation.navigate('SignUpPassword');
    }
    function handleMessageButton(){
        navigation.navigate('SignUp');
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Crie sua conta
                </Text>
                <Text style={styles.subtitle}>
                    Preencha com seus dados.
                </Text>
            </View>
            <View>
                <SignInput
                    name="user"
                    placeholder="Nome"
                    onChangeText={(t: React.SetStateAction<string>)=>setNameField(t)}

                    value={nameField}            
                />
                <SignInput
                    name="mail"
                    placeholder="E-mail"
                    onChangeText={(t: React.SetStateAction<string>)=>setEmailField(t)}
                  
                    value={emailField}
                />
                <SignInput
                    name="phone"
                    placeholder="Telefone"
                    onChangeText={(t: React.SetStateAction<string>)=>setPhoneField(t)}
                   
                    value={phoneField}
                />
                <ButtonBasic
                    title="Continuar cadastro" 
                    activeOpacity={0.8}
                    onPress={handleSignUp}
                />    
                <Text style={styles.splitText}>
                - Ou -
                </Text>
            </View>
            <SignMessageButton
                title='Ja possui conta?'
                action='Faça seu login'
                activeOpacity={0.9}
                onPress={handleMessageButton}
            />
        </View>
    );

}
