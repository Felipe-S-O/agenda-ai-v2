import { StyleSheet } from 'react-native'

export const estilos = (tema) => {

    return StyleSheet.create({
        imageTopo:{
            height: 42,
            width: 90,
            alignItems: 'center',
            marginEnd: '-14%'
            
        },
        topoArea: {
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: "#CBA122",
            justifyContent: 'space-around',
            position: "absolute",
            top: 0,
        },
        textoTopo: {
            fontSize: 18,
            fontWeight: 'bold',
            color: tema.texto,
            marginLeft: 10,
            padding: 8,
            alignItems: 'center',
        },
        menu: {
            padding: 6,
            marginLeft: '-16%',
            flexDirection: 'row',
            alignItems: 'center',
        },
    })
}