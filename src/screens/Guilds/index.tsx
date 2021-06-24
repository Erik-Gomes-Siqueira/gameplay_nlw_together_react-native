import React from 'react'
import { View, FlatList } from 'react-native'
import { Guild, GuildProps } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'

import { styles } from './style'

type Props ={
    handleGuildsSelected: (guild: GuildProps) => void
}

export function Guilds({handleGuildsSelected}: Props){
    const guilds = [
        {
            id: '1',
            name: 'Lendarios', 
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Canal de Games', 
            icon: 'image.png',
            owner: false
        }
    ]
    return(
        <View style={styles.container}>
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
        </View>
    )
}
