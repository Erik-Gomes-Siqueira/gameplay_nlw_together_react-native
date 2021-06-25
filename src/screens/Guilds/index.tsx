import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { Guild, GuildProps } from '../../components/Guild'
import { Load } from '../../components/Load'
import { ListDivider } from '../../components/ListDivider'

import { styles } from './style'
import { api } from '../../services/api'

type Props ={
    handleGuildsSelected: (guild: GuildProps) => void
}

export function Guilds({handleGuildsSelected}: Props){
    const [ guilds, setGuilds ] = useState<GuildProps[]>([])
    const [ loading, setLoading ] = useState(true)

    async function fethGuilds(){
        const response = await api.get('/users/@me/guilds')

        setGuilds(response.data)
        setLoading(false)
    }

    useEffect(() => {
        fethGuilds()
    }, [])

    return(
        <View style={styles.container}>
            {
                loading 
                ? 
                    <Load /> 
                :
                    <FlatList 
                        data={guilds}
                        keyExtractor={item => item.id}
                        renderItem={({item}) =>( 
                            <Guild 
                                data={item}
                                onPress ={() => handleGuildsSelected(item)}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <ListDivider isCentered/>}
                        contentContainerStyle={{ paddingBottom: 68, paddingTop: 104 }}
                        ListHeaderComponent={() => <ListDivider isCentered/>}
                        style={styles.guilds}
                    />

            }
        </View>
    )
}
