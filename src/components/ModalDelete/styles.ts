import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.secondary90,
        padding: 24,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title:{
        marginTop: 18,
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
        fontSize: 28,
        color: theme.colors.heading
    },
    containerButton:{
        height: 120,
        justifyContent: 'space-between'
    },
    
    guildInfo:{
        justifyContent:'center',
        alignItems: 'center'
    },
    image:{
        width: 100,
        height: 100,
        borderWidth: 3,
        borderColor: theme.colors.secondary40,
        borderRadius: 12,
        marginBottom: 20
    },
    button:{
        width: '100%',
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection:'row',
        alignItems: 'center'
    },
    textButton:{
        flex: 1,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        fontFamily: theme.fonts.text500
    },
    guildName:{
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        fontSize: 25
    },
    guildDescription:{
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 18
    }
});