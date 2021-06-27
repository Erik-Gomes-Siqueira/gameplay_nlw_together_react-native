import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export function ButtonDelete({...rest}: RectButtonProps ) {
    return(
        <RectButton 
            style={styles.container}
            {...rest}
        >
            <MaterialCommunityIcons 
                name='trash-can'
                color={theme.colors.heading}
                size={30}
            />
        </RectButton>
    )
}