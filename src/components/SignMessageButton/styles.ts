import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    content: {
        width: '100%',
        height: 56,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: theme.colors.highlight,
        fontSize: 16,
        fontFamily: theme.fonts.text400,
        marginRight: 5
    },
    action: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title600,
        fontSize: 16,
    }
})