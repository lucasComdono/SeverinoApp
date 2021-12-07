import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { SignMessageButton } from '../../components/SignMessageButton';
import { ButtonBasic } from '../../components/ButtonBasic';
import { SignInput } from '../../components/SignInput';
import firebase from '../../config/firebaseConfig';
import { View, Text } from 'react-native';
import { styles } from './styles';


export function SignIn() {
    
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[errorLogin, setErrorLogin] = useState<boolean>();
    const navigation = useNavigation();

    const loginFirebase = ()=> {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            let user = userCredential.user;
            console.log(user)
            navigation.navigate('Home')
            // navigation.navigate('Home', { idUser: user.id })
            // ...
        })
        .catch((error) => {
            setErrorLogin(true)
            let errorCode = error.code;
            let errorMessage = error.message;
            // ..
        });
    }
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const uid = user.uid;
                console.log('User email', user.email)
            } 
          });
    }, [])
    

    function handleSignIn(){
        navigation.navigate('Home');
    }
    function handleMessageButton(){
        navigation.navigate('SignUp');
    }

    return (

        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Seja bem vindo!
                </Text>
                <Text style={styles.subtitle}>
                    Preencha com seus dados {"\n"}ou faça o cadastro.
                </Text>
            </View>
            <View>
                <SignInput
                    name="user"
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
                {errorLogin === true
                ? 
                <Text style={styles.alert}>Email ou senhas inválidos</Text> 
                : 
                <View/>
                }
                {email === '' || password  === '' 
                ? 
                    <ButtonBasic
                        title="Vamos começar?" 
                        activeOpacity={0.8}
                        onPress={handleSignIn}
                        enabled={true}
                    />
                :
                    <ButtonBasic
                        title="Vamos começar?" 
                        activeOpacity={0.8}
                        onPress={handleSignIn}
                        enabled={true}
                    />                    
                }


                <Text style={styles.splitText}>
                - Ou -
                </Text>
            </View>
            <SignMessageButton
            title='Novo por aqui?'
            action='Criar uma conta'
            activeOpacity={0.5}
            onPress={handleMessageButton}
        
            />
        </View>
        
    );

}
