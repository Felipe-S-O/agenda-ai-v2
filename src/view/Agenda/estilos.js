import { StyleSheet } from 'react-native'

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
            fontSize: 18,
            fontWeight: 'bold',
            color: '#FFFFFF',
            padding: 5,
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
        agenda: {
            top: 120,
            marginBottom: 10,
        },
        tituloArea: {
            top: 100,
            width: "90%",
            flexDirection: 'row',
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