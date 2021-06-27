import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Text } from 'react-native'
import { styles } from './styles'

type Props = RectButtonProps & {
    title: string;
    color?: string
}

export function Button({title, color, ...rest}: Props){
    return(
        <RectButton
            style={color? [styles.container, {backgroundColor: color}] :styles.container}
            {...rest}
        >

            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}