import React, { useState } from 'react'
import { 
    View, 
    Text, 
    Image
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { ButtonIcon } from '../../components/ButtonIcon'
import { Background } from '../../components/Background'

import IllustrationImg from '../../assets/illustration.png'
import { styles } from './style'



export function SingIn() {
    const navigaiton = useNavigation()
    
    function handleSingIn(){
        navigaiton.navigate('Home')
    }

    return (
        <Background>
            <View style={styles.container}>
                <Image 
                    source={IllustrationImg} 
                    style={styles.image}
                    resizeMode="stretch"
                />

                <View style={styles.content} >
                    <Text style={styles.title} >
                        Conecte-se {'\n'}
                        e organize suas {'\n'}
                        jogatinas 
                    </Text>

                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {'\n'}
                        favoritos com seus amigos
                    </Text>

                    <ButtonIcon 
                        title='Entrar com Discord' 
                        activeOpacity={0.7}
                        onPress={handleSingIn}
                    />
                </View>
            </View>
        </Background>
    )
}
