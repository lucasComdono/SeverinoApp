import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text } from 'react-native';

import { styles } from './styles';
import { Feather } from '@expo/vector-icons'; 

type Props =  RectButtonProps & {
    title: string;
    subtitle: string;
    icon: any;
}

export function UserTypeButton({ title, subtitle, icon, ...rest } : Props) {
    return(
        < RectButton
            {...rest}
        >
            <Feather name={icon} size={56} color={"white"} style={styles.icon}/>
            
            <Text style={styles.boxtitle}>
                <Text style={styles.title}>

                { title }{ '\n' }</Text>
                <Text style={styles.subtitle}>
                { subtitle }
                </Text>
            </Text>

            
        </ RectButton>
    );
}
