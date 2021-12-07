import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: 'flex-start',
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
        marginVertical: 30,
        paddingHorizontal: 30,
        paddingTop: getStatusBarHeight()
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 24,
        fontFamily: theme.fonts.title600,
    },
    title2: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 20,
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