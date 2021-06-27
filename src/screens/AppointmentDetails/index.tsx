import React, { useState, useEffect } from 'react'
import { 
    Alert, 
    FlatList, 
    ImageBackground, 
    Text, 
    View,
    Share,
    Platform,
    Modal
} from 'react-native'
import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useRoute } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { theme } from '../../global/styles/theme'
import { styles } from './style'
import { ListHeader } from '../../components/ListHeader'
import { Member, MemberProps } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'
import { AppointmentProps } from '../../components/Appointments'
import { api } from '../../services/api'
import { Load } from '../../components/Load'
import { ButtonDelete } from '../../components/ButtonDelete'
import { ModalDelete} from '../../components/ModalDelete'

import { COLLECTION_APPOINTMENTS } from '../../config/database'

const { CDN_IMAGE } = process.env;

type Params = {
    guildSelected: AppointmentProps
}

type GuildWidiget ={
    id: string
    name: string
    instant_invite: string
    members: MemberProps[]
}

export function AppointmentDetails(){
    const [ widget, setWidiget ] = useState<GuildWidiget>( {} as GuildWidiget)
    const [ loading, setLoading ] = useState(true)
    const [ showModal, setShowModal ] = useState(false)
    const [ isRender, setIsRender ] = useState(false)

    const navigation = useNavigation()

    const routes = useRoute()
    const { guildSelected } = routes.params as Params

    const uri = `${CDN_IMAGE}/icons/${guildSelected.guild.id}/${guildSelected.guild.icon}.png`

    async function fetchGuildWidiget() {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)
            setWidiget(response.data)
            setIsRender(true)
        } catch {
            setIsRender(false)
            navigation.navigate('Home')
            Alert.alert('Erro.Verifique as configurações do servidor se o Widget está habilitado.')
        }finally {
            setLoading(false)
        }
    }

    async function handleDeleteGuild(){
        // Função que remove o a partida que não sei implementar ainda
    }

    function hadleShareInvitation(){
        const message = Platform.OS === 'ios' 
        ? `Junte-se ao ${guildSelected.guild.name}`
        : widget.instant_invite

        Share.share({
            message,
            url: widget.instant_invite
        })
    }

    function handleOpenGuild(){
        Linking.openURL(widget.instant_invite)
    }

    function handleShowModal(){
        setShowModal(true)
    }
    function handleCloseModal(){
        setShowModal(false)
    }

    useEffect(() =>{
        fetchGuildWidiget()
    }, [])
    if(isRender){
        return(
            <Background>
                <Header 
                    title='Detalhes'
                    action={
                        guildSelected.guild.owner &&
                        <BorderlessButton onPress={hadleShareInvitation}>
                            <Fontisto 
                                name='share'
                                size={24}
                                color={theme.colors.primary}
                            />
                        </BorderlessButton>
                    }
                />
    
                <ImageBackground 
                    source={{uri}}
                    style={styles.banner}
                >
                    <View style={styles.bannerContent}>
                        <Text style={styles.title}>
                            {guildSelected.guild.name}
                        </Text>
    
                        <Text style={styles.subtitle}>
                            {guildSelected.description}
                        </Text>
                    </View>
                </ImageBackground>
    
                {
                    loading 
                    ?
                        <Load />
                    :
                    <>
                        <ListHeader 
                            title='Jogadores'
                            subtitle={`Total ${widget.members.length}`}
                        />
            
                        <FlatList 
                            data={widget.members}
                            keyExtractor={item => item.id}
                            renderItem={({item}) =>(
                                <Member data={item}/>
                            )}
                            ItemSeparatorComponent={() => <ListDivider isCentered/>}
                            style={styles.members}
                        />
            
                </>
                }
                <View style={styles.footer}>
                    {
                        guildSelected.guild.owner &&
                        <ButtonIcon 
                            title='Entrar na partida' 
                            onPress={handleOpenGuild}
                        />
                    }
                    <ButtonDelete onPress={handleShowModal}/>
                </View>
                <ModalDelete
                    visible={showModal}
                    title='Deseja apagar essa partida?'
                    image={uri}
                    guild={guildSelected.guild.name}
                    description={guildSelected.description}
                    confirmOption={handleDeleteGuild}
                    closeModal={handleCloseModal}
                />
                
            </Background>
        )

    }else{
        return null
    }
}
