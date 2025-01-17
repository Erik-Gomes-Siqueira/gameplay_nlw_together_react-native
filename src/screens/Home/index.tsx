import React, { useState, useCallback } from 'react'
import { FlatList, View, Text } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'



import { Appointments, AppointmentProps } from '../../components/Appointments'
import { Background } from '../../components/Background'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListDivider } from '../../components/ListDivider'
import { ListHeader } from '../../components/ListHeader'
import { Profile } from '../../components/Profile'
import { Load } from '../../components/Load'

import { styles } from './styles'
import { COLLECTION_APPOINTMENTS } from '../../config/database'

export function Home() {
    const [category, setCategory] = useState('') 
    const [appointments, setAppointments] = useState<AppointmentProps[]>([])
    const [loading, setLoading] = useState(true)

    const navigation = useNavigation()

    
    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }

    function handleAppointmentDetails(guildSelected: AppointmentProps){
        navigation.navigate('AppointmentDetails', { guildSelected })
    }

    function handleAppointmentCreate(){
        navigation.navigate('AppointmentCreate')
    }

    async function loadAppointments(){

        const response = await AsyncStorage.getItem( COLLECTION_APPOINTMENTS)
        const storage:AppointmentProps[] = response ? JSON.parse(response) : []
        
        if(category){
            setAppointments(storage.filter(item => item.category === category))
        }
        else{
            setAppointments(storage)
        }

        setLoading(false)
    }

    useFocusEffect(useCallback(() => {
        loadAppointments()
    }, [category]))

    const clearAll = async () => {
        try {
          await AsyncStorage.clear()
        } catch(e) {
          // clear error
        }
      
        console.log('Done.')
      }
    //   clearAll()

   // console.log(appointments)
    return(
        <Background>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd onPress={handleAppointmentCreate}/>
            </View>

            <CategorySelect 
                categorySelected={category}
                setCategory={handleCategorySelect} 
            />
            {
                loading 
                ?
                    <Load />
                :
                    <>
                        <ListHeader 
                            title='Partidas agendadas' 
                            subtitle={`Total: ${appointments.length}`}
                        />
                        {
                            appointments.length === 0
                            ? 
                                <Text style={styles.emptyList}>Você não possui partidas marcadas</Text>
                            :
                                <FlatList 
                                    data={appointments}
                                    keyExtractor={item => item.id}
                                    renderItem={({item}) => (
                                        <Appointments 
                                            data={item}
                                            onPress={() => handleAppointmentDetails(item)}
                                        />
                                    )}
                                    ItemSeparatorComponent={() => <ListDivider /> }
                                    contentContainerStyle={{ paddingBottom: 69 }}
                                    style={styles.matches}
                                    showsHorizontalScrollIndicator={false}
                                />
                        }
                    </>
            }
            
        </Background>
    )
}