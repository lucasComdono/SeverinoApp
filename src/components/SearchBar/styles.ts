import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 30
    },
    inputArea: {
        backgroundColor: '#fff',
        width: '80%',
        height: 54,
        flexDirection: 'row',
        paddingLeft: 20,
        borderRadius: 12,
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.05,
        shadowRadius: 6.27,
        elevation: 10
    },
    input: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 16,
        fontFamily: theme.fonts.text400,
        paddingLeft: 5,
        marginTop: 2,
    
    },
    search: {
        backgroundColor: theme.colors.primary,
        height: 54,
        paddingHorizontal: 18,
        borderRadius: 12,
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.05,
        shadowRadius: 6.27,
        elevation: 10
    },

})