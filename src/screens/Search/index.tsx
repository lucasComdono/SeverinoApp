import React from 'react';
import { View, Text, Image } from 'react-native';
import { SearchBar } from '../../components/SearchBar';
import { styles } from './styles';

import Avatar from '../../assets/avatar.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Search() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                    <Text style={styles.title}>Bem vinda Emília</Text>
                    <Image
                        style={styles.avatar}
                        source={Avatar} 
                    />
            </View>
            <SearchBar 
                    placeholder={'Digite sua procura...'} 
                    onChangeText={undefined} 
                    value={undefined}                    
            />      
           <View style={styles.header}>
                <Text style={styles.title2}>Seus favoritos</Text>
                <TouchableOpacity>
                    <Text style={styles.subtitle}>Ver todos</Text>
                </TouchableOpacity>
           </View>
           
        </View>
    );

}
