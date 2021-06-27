import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container:{
        height: 56,
        width: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        marginLeft: 15,
        alignItems: 'center',
        justifyContent:'center'
    }
})