import React from 'react';
import { 
    View,
    TextInput
} from 'react-native';


import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import { FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

type Props = {
    placeholder: string;
    onChangeText: any;
    password?: boolean;
    value: any;
}

export function SearchBar({ placeholder, onChangeText, password, ...rest}: Props) {
    const {highlight} = theme.colors;
    return(
        <View 
            style={styles.container}
            {...rest}
        >
            <View style={styles.inputArea}>       
                
                <TextInput 
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    secureTextEntry={password}
                />
            </View>  
            <RectButton>
                <FontAwesome name="search" size={24} color="black" />
            </RectButton>
        </View>
    );
}
