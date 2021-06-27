import React from 'react'

import {
    View,
    Text,
    Modal,
    ModalProps,
    Image,
    TouchableOpacity
} from 'react-native';

import { styles } from './styles';
import { Button } from '../Button';

type Props = ModalProps &{
    title: string
    image: string
    description: string
    guild: string
    confirmOption: () => void
    closeModal: () => void
}

export function ModalDelete({
    title,
    image,
    description,
    guild,
    confirmOption,
    closeModal,
    ...rest
}: Props){
    const uri = image

    return (
            <Modal
                {...rest}
            >


                <View style={styles.container}>
                    <Text style={styles.title}>
                        {title}
                    </Text>

                    <View style={styles.guildInfo}>
                        <Image 
                            source={{uri}}
                            style={styles.image}
                            resizeMode='cover'
                        />

                        <Text style={styles.guildName}>
                            {guild}
                        </Text>

                        <Text style={styles.guildDescription}>
                            {description}
                        </Text>
                    </View>
                    
                    <View style={styles.containerButton}>
                        <TouchableOpacity 
                            style={[styles.button, {backgroundColor:'#dfa62d'}]}
                            onPress={confirmOption}
                        >
                            <Text style={styles.textButton}>Sim</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.button}
                            onPress={closeModal}
                        >
                            <Text style={styles.textButton}>Não</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        )
}