import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    diaArea: {
        flexDirection: 'row',
        backgroundColor: "#FFF",
        width: (width - 12) / 8.6,
        height: (width - 12) / 8.6,
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
    texto: {
        color: "#000",
        fontWeight: '600',
        fontSize: 16,
    },
})
