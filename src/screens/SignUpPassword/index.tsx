import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text } from 'react-native';
import { styles } from './styles';

import { SignMessageButton } from '../../components/SignMessageButton';
import { ButtonBasic } from '../../components/ButtonBasic';
import { SignInput } from '../../components/SignInput';
import { Topbar } from '../../components/Topbar';


export function SignUpPassword() {

    const[passwordField, setPasswordField] = useState('');


    const navigation = useNavigation();

    function handleSignUpPassword(){
        navigation.navigate('SignUpUserType');
    }
    function handleMessageButton(){
        navigation.navigate('SignIn');
    }

    return (
        <View style={styles.container}>
            <View>
                <Topbar/>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Segurança
                </Text>
                <Text style={styles.subtitle}>
                    Escolha uma senha forte{'\n'}para protejer sua conta.
                </Text>
            </View>
            <View>
                <SignInput
                    name="lock"
                    placeholder="Digite sua senha"
                    onChangeText={(t: React.SetStateAction<string>)=>setPasswordField(t)}
                    password={true}
                    value={passwordField}            
                />
                <SignInput
                    name="lock"
                    placeholder="Confirme sua senha"
                    onChangeText={(t: React.SetStateAction<string>)=>setPasswordField(t)}
                    password={true}
                    value={passwordField}    
                />
                <ButtonBasic
                    title="Continuar cadastro" 
                    activeOpacity={0.8}
                    onPress={handleSignUpPassword}
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
