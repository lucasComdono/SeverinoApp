import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    title: {
        flex: 1,
        color: theme.colors.white,
        fontSize: 20,
        fontFamily: theme.fonts.title700
    },
    boxtitle: {
        flex: 1,
    },
    subtitle: {
        color: theme.colors.white,
        fontSize: 14,
        fontFamily: theme.fonts.text400      
    },
    icon: {
        paddingRight: 20
    }
})