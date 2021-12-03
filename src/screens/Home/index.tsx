import React from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from '../../components/SearchBar';
import { styles } from './styles';

export function Home() {
    return (
        <View style={styles.container}>
            <View>

            </View>
           
            <SearchBar 
                placeholder={'Digite sua procura...'} 
                
                onChangeText={undefined} 
                value={undefined}                    
            />
            
        </View>
    );

}
