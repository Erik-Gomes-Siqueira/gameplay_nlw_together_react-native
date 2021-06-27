import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() +26,
        marginBottom: 42
    },
    matches:{
        marginTop: 24,
        marginLeft: 24
    },
    emptyList:{
        marginTop: 60,
        textAlign:'center',
        fontSize: 18,
        fontFamily: theme.fonts.text500,
        color: theme.colors.highlight
    }
})