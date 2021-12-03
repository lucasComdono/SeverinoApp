import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text } from 'react-native';

import { styles } from './styles'

type Props = RectButtonProps & {
    title: string;
    action: string;
}

export function SignMessageButton({ title, action, ...rest } : Props) {
    return(
        <RectButton 
            style={styles.content}
            {...rest}
        >
            <Text style={styles.title}>
                { title }
            </Text> 
            <Text style={styles.action}>
                { action }
            </Text> 
        </RectButton>
        
    );
}
