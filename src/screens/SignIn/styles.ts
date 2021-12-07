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
      paddingBottom: 30
    },
    title: {
        color: theme.colors.heading,
        fontSize: 30,
        fontFamily: theme.fonts.title600,
        lineHeight: 30,
        paddingTop: 40
    },
    subtitle: {
        color: theme.colors.highlight,
        fontSize: 16,
        fontFamily: theme.fonts.text500,
    },
    splitText: {
        alignSelf: 'center',
        color: theme.colors.highlight,
        fontSize: 16,
        fontFamily: theme.fonts.text400,
        marginVertical: 30
    },
    alert: {
        color: '#f47174',
        marginBottom: 30
    }
})