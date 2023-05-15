import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({

    horarioDisponivelArea: {
        backgroundColor: "#FFF",
        width: (width - 12) / 3.4,
        height: (width - 12) / 3.7,
        margin: 4,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },

    horarioIndisponivelArea: {
        backgroundColor: "#ed3456",
        width: (width - 12) / 3.4,
        height: (width - 12) / 3.7,
        margin: 4,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    botaoArea: {
        width: (width - 12) / 3.4,
        height: (width - 12) / 3.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    valor: {
        color: "#000",
        fontSize: 14,
        top: 10,

    },
    numero: {
        color: "#000",
        fontWeight: '600',
        fontSize: 22,
    },
})
