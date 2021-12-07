import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps, TouchableOpacity } from 'react-native-gesture-handler';
import { ServiceIcon } from '../ServiceIcon';

import { styles } from './style';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { theme } from '../../global/styles/theme';


export type ServiceProps = {
    id: string, 
    name: string, 
    city: string, 
    price: string,
}

type Props = RectButtonProps & {
    data: ServiceProps;
}

export function Service({data, ...rest}: Props) {
    const { primary, highlight } = theme.colors; 
    return(
            <View style={{paddingHorizontal:30}}>
                <RectButton {...rest} style={styles.container}>
                    <ServiceIcon/>
                    <View style={styles.row}>
                        <View style={styles.content}>
                            
                            <Text style={styles.title}> {data.name} </Text>
                            <View style={styles.row}>
                                <View style={styles.location}>
                                    <SimpleLineIcons name="location-pin" size={12} style={styles.icon} />
                                    <Text style={styles.text}> {data.city}</Text>
                                </View>
                                <Text style={styles.text}> R$</Text>
                                <Text style={styles.text}> {data.price}</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.talkButton}
                        >
                            <SimpleLineIcons name="bubbles" size={24} color={primary} />
                        </TouchableOpacity>
                    </View>
                </RectButton>
            </View>
    );
}
