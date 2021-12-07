import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles'

type Props = TouchableOpacityProps & {
    title: string;
    action: string;
}

export function SignMessageButton({ title, action, ...rest } : Props) {
    return(
        <TouchableOpacity
            style={styles.content}
            {...rest}
        >
            <Text style={styles.title}>
                { title }
            </Text> 
            <Text style={styles.action}>
                { action }
            </Text> 
        </TouchableOpacity>
        
    );
}
