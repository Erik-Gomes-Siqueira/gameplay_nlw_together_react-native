import React from 'react';
import { 
    RectButton, 
    RectButtonProps, 
    TouchableWithoutFeedback 
} from 'react-native-gesture-handler'

import {
    View,
    Text,
    Modal,
    ModalProps
} from 'react-native';

import { styles } from './styles';
import { Button } from '../Button';

type Props = ModalProps&{
    title: string
    wantOptions: boolean
    confirmOption?: () => void
    closeOption: () => void
}

export function ModalAlert({
    title,
    wantOptions,
    confirmOption,
    closeOption,
    ...rest
}: Props){
    return (
        <TouchableWithoutFeedback onPress={closeOption}>
            <Modal 
                {...rest}
            >
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
        
                    <View style={styles.containerButton}>
                        { wantOptions&&
                            <Button
                                title='Sim'
                                color= '#dfa62d'
                            />
                            
                        }

                        <Button
                            title={wantOptions ? 'Não': 'Fechar'}
                        />

                    </View>
                </View>
            </Modal>
        </TouchableWithoutFeedback>
        )
}