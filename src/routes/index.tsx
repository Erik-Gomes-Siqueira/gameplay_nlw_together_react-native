import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { useAuth } from '../hooks/auth'

import { AuthRoutes } from './auth.routes'
import { SingIn } from '../screens/SingIn'

export function Routes(){
    const { user } = useAuth()
    return(
        <NavigationContainer>
            {
                user.id 
                ? <AuthRoutes />
                : <SingIn />
            }
        </NavigationContainer>
    )
}
