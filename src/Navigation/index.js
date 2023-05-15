import React from 'react'
import StackNavigation from './StackNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { TemaProvider } from '../contexts/TemaContext'
import { EmpresaProvider } from '../contexts/EmpresaContext'

export default function Navigation() {

    return <>
        <TemaProvider>
            <EmpresaProvider>
                <NavigationContainer>
                    <StackNavigation />
                </NavigationContainer>
            </EmpresaProvider>
        </TemaProvider>

    </>
}