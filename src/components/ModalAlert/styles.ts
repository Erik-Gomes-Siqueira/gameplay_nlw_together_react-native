import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.secondary90
    },
    title:{
        marginTop: 18,
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
        fontSize: 25,
        color: theme.colors.heading
    }
});