import { StyleSheet } from 'react-native'

export const estilos = (tema) => {

    return StyleSheet.create({
        tabBar: {
            position: 'absolute',
            borderTopWidth: 0,
            bottom: -1,
            right: 12,
            left: 12,
            height: 62,
            paddingBottom: 5,
            borderRadius: 8,
            backgroundColor: tema.fundoBotao,
            borderRadius: 10,
            shadowColor: tema.borda,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.35,
            shadowRadius: 3.84,
            elevation: 5,
        },
    })
}