import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TemaContext } from '../contexts/TemaContext';
import { Feather } from 'react-native-vector-icons'
import React, { useContext } from 'react';
import { estilos } from './estilos'
import {  
    Configuracao,
    Horas,   
    Agenda
} from '../view'

const Tab = createBottomTabNavigator();

export default function TabNavigation() {

    const {
        temaEscolhido
    } = useContext(TemaContext)
    const estilo = estilos(temaEscolhido)

    return <>
        <Tab.Navigator
            initialRouteName='Agenda'
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#ed3456",
                tabBarStyle: estilo.tabBar,
            }}
        >
            <Tab.Screen name="Horarios" component={Horas} options={{
                tabBarIcon: ({ color }) => (
                    <Feather name="clock" size={22} color={color} />
                ),
            }} />
            <Tab.Screen name="Agenda" component={Agenda} options={{
                tabBarIcon: ({ color }) => (
                    <Feather name="calendar" size={22} color={color} />
                ),
            }} />

            <Tab.Screen name="Configuração" component={Configuracao} options={{
                tabBarIcon: ({ color }) => (
                    <Feather name="settings" size={24} color={color} />
                ),
            }} />

        </Tab.Navigator>
    </>

}
