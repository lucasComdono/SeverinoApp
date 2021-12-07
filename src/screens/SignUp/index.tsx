import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text } from 'react-native';
import { styles } from './styles';

import firebase from '../../config/firebaseConfig';

import { SignMessageButton } from '../../components/SignMessageButton';
import { ButtonBasic } from '../../components/ButtonBasic';
import { SignInput } from '../../components/SignInput';
import { Topbar } from '../../components/Topbar';


export function SignUp() {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[errorRegister, setErrorRegister] = useState<boolean>();

    const register  = ()=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {

            let errorCode = error.code;
            let errorMessage = error.message;
            // ..
        });
    }

    const navigation = useNavigation();
    function handleSignUp(){
        navigation.navigate('SignUpUserType');
    }
    function handleMessageButton(){
        navigation.navigate('SignIn');
    }

    return (
        <View style={styles.container}>
            <Topbar/>
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
                    onChangeText={(t: React.SetStateAction<string>)=>setName(t)}

                    value={name}            
                />
                <SignInput
                    name="mail"
                    placeholder="E-mail"
                    onChangeText={(t: React.SetStateAction<string>)=>setEmail(t)}
                  
                    value={email}
                />
                <SignInput
                    name="lock"
                    placeholder="Senha"
                    onChangeText={(t: React.SetStateAction<string>)=>setPassword(t)}
                    password={true}
                    value={password}
                />
                {errorRegister === true ? 
                    <Text style={styles.alert}>Email ou senhas inválidos</Text> 
                    :
                    <View/>
                }
                {email === "" || password ==="" ?
                    <ButtonBasic
                    title="Continuar cadastro" 
                    activeOpacity={0.8}
                    onPress={handleSignUp}
                    enabled={true}
                    />   
                    :
                    <ButtonBasic
                    title="Continuar cadastro" 
                    activeOpacity={0.8}
                    onPress={handleSignUp}
                    enabled={true}
                    />                       
                }

                <Text style={styles.splitText}>
                - Ou -
                </Text>
            </View>
            <SignMessageButton
                title='Ja possui conta?'
                action='Faça seu login'
                activeOpacity={0.5}
                onPress={handleMessageButton}
            />
        </View>
    );

}
