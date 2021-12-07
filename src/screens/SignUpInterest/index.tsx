import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';

import { Category } from '../../components/Category';

import { ButtonBasic } from '../../components/ButtonBasic';
import { CategorySelect } from '../../components/CategorySelect';
import { Topbar } from '../../components/Topbar';

type Props = {
    categorySelected: string;
}

export function SignUpInterest({categorySelected}: Props) {
    const interests = [
        {id: '1', title: 'Casa'},
        {id: '2', title: 'Comida'},
        {id: '3', title: 'Carros'},
        {id: '4', title: 'Saúde'},     
        {id: '5', title: 'Eventos'},
        {id: '6', title: 'Produtos'},            
    ]
    
    const navigation = useNavigation();

    function handleSignUpInterest(){
        navigation.navigate('Home');
    }

    return (< >

                <View style={styles.container}>
                    <Topbar/>
                    <View style={styles.content}>
                        <Text style={styles.title}>
                            Seus interesses
                        </Text>
                        <Text style={styles.subtitle}>
                            Selecione as áreas que {'\n'}mais combinam com você
                        </Text>

                    </View>
                </View>
                <View>
                    <FlatList 
                        style={styles.flatList}
                        data={interests}
                        keyExtractor={item => item.id}
                        horizontal={false}
                        numColumns={2}
                        scrollEnabled={false}
                        renderItem={(({item}) => (
                            <Category
                                data={item}
                            />   
                        ))}
                    />                    
                </View>

                
                <View style={styles.container}>
                    <ButtonBasic
                        title="Finalizar" 
                        activeOpacity={0.8}
                        onPress={handleSignUpInterest}
                    />   
                </View> 

            </>
        
    );

}
