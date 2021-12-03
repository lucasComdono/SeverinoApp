import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#F5F5F5',
        
    },
    content: {
      marginBottom: 30
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
        marginBottom: 30
    },
    splitText: {
        alignSelf: 'center',
        color: theme.colors.highlight,
        fontSize: 16,
        fontFamily: theme.fonts.text400,
        marginVertical: 30
    },
    flatList: {
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 22,
    },
})




        