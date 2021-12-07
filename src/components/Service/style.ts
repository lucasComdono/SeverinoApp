import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 20,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.05,
        shadowRadius: 6.27,
        elevation: 10
    },
    content:{
        paddingLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {

    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
  
    },
    title: {
        fontFamily: theme.fonts.title600,
        fontSize: 16,
        alignSelf: 'flex-start'
    },
    location: {
        flexDirection:'row',
        marginRight: 20,
        alignItems: 'center',
        height: 18

    },
    text: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 12,
        alignSelf: 'flex-start'
        
    },
    icon: {
        color: theme.colors.highlight,
        paddingLeft: 3,
    
    },
    talkButton: {
        paddingTop:10, 
        paddingRight: 5
    }
}) 