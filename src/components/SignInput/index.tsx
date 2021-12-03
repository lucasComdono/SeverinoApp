import React from 'react';
import { 
    View,
    TextInput
} from 'react-native';


import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import { Feather } from '@expo/vector-icons'; 

type Props = {
    placeholder: string;
    name: any;
    onChangeText: any;
    password?: boolean;
    value: any;
}

export function SignInput({ placeholder, name, onChangeText, password, ...rest}: Props) {
    const {highlight} = theme.colors;
    return(
        <View {...rest}>
            <View style={styles.inputArea}>       
                <Feather name={name} size={24} color={highlight} />
                <TextInput 
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    secureTextEntry={password}
                />
            </View>  
        </View>
    );
}
