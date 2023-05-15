import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export const estilos = (tema) => {

    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: tema.fundo
        },
        text: {
            color: '#fff'
        },
        texto: {
            fontSize: 24,
            fontWeight: 'bold',
            color: tema.titulo,
            padding: 4,
            marginBottom: 10,
        },
        iconData: {
            fontSize: 46,
            fontWeight: 'bold',
            padding: 4,
        },
        menu: {
            padding: 10,
        },
        imageTopo: {
            height: 42,
            width: '30%',
            alignItems: 'center',
            marginEnd: '-20%'

        },
        topoArea: {
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: "#ed3456",
            justifyContent: 'space-around',
            position: "absolute",
            padding: 5,
            top: 0,
        },
        textoTopo: {
            fontSize: 18,
            fontWeight: 'bold',
            color: tema.texto,
            marginLeft: '-20%',
            alignItems: 'center',
        },
        lista: {
            flex: 1,

        },
        horasArea: {
            top: 140,
            marginBottom: 10,

        },
        tituloArea: {
            top: 120,
            width: "100%",
            alignItems: 'center',
            justifyContent: 'center',
        },
        lettieEntrada: {
            width: '120%',
            alignItems: 'center',
            justifyContent: 'center',
            position: "absolute",
        }

    })
}