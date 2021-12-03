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
        marginTop: '12%',
        fontFamily: theme.fonts.title600,
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
        marginVertical: 15
    },
    cliente: {
        width: '100%',
        height: 120,
        borderRadius: 8,
        flexDirection:'row',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: theme.colors.primary,
        padding: 27
    },
    empreendedor: {
        width: '100%',
        height: 120,
        borderRadius: 8,
        flexDirection:'row',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: theme.colors.heading,
        padding: 27
    }
})