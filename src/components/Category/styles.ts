import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 90,
        margin: 8,
        borderRadius: 12,
        backgroundColor: 'white',
        shadowColor: theme.colors.heading,
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 5
    },
    button: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',

    },
    check: {
        borderWidth: 0,
    },
    checkIcon: {
        alignSelf: 'flex-end',
        color: theme.colors.white,
        marginRight: 10
    },
    checked: {
        borderRadius: 12,
        borderWidth: 2,
        borderColor: theme.colors.primary,
    },
    checkedIcon: {
        alignSelf: 'flex-end',
        color: theme.colors.primary,
        marginRight: 10
    },

    title: {
        fontFamily: theme.fonts.title700,
        paddingBottom: 25
    }
})