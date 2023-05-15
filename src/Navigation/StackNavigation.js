import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigation from './TabNavigation'
import React from 'react'

import {
    Inicio,
    Login,
} from '../view'


const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName='Inicio'  >
        <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="AgendaStack" component={TabNavigation} options={{ headerShown: false }} />
    </Stack.Navigator>

)

