import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { useAuth } from '../hooks/auth'

import { AppRoutes } from './app.routes'
import { SingIn } from '../screens/SingIn'

export function Routes(){
    const { user } = useAuth()
    return(
        <NavigationContainer>
            {
                user.id 
                ? <AppRoutes />
                : <SingIn />
            }
        </NavigationContainer>
    )
}
