import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        padding: 30,
        backgroundColor: '#F5F5F5',
    },
    content: {
      flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginVertical: 30
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 22,
        fontFamily: theme.fonts.title600,
    },
    title2: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: theme.fonts.title600,
    },
    subtitle: {
        color: theme.colors.highlight,
        textAlign: 'center',
        fontSize: 15,
        fontFamily: theme.fonts.text400,
        lineHeight: 26
    },
    avatar: {
        borderRadius: 35,
        width: 44,
        height: 44,

    }
})