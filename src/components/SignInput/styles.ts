import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    inputArea: {
        backgroundColor: '#fff',
        width: '100%',
        height: 54,
        flexDirection: 'row',
        paddingLeft: 20,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 25,
    },
    input: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 16,
        fontFamily: theme.fonts.text400,
        paddingLeft: 20
    }
})