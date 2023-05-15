import { StyleSheet } from 'react-native'

export const estilos = (tema) => {

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: tema.fundo,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tituloArea: {
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: "#ed3456",
      position: "absolute",
      marginBottom: 14,
      top: 0,
    },
    imageTopo: {
      height: 42,
      width: '30%',
      alignItems: 'center',
      marginEnd: '-14%'

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
      marginLeft: -50,
      alignItems: 'center',
    },
    switchArea: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      minWidth: 20,
      marginHorizontal: 16,
      marginVertical: 8,
      padding: 16,
      backgroundColor: tema.fundo,
      top: '-66%',
      backgroundColor: tema.fundoBotao,
      borderRadius: 10,
      shadowColor: tema.borda,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    sairArea: {
      width: '90%',
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor: tema.fundo,
      top: '-67%',
    },
    switch: {
      width: '45%',
      marginLeft: '20%',
      marginEnd: '30%',
    },
    textoSwitch: {
      fontSize: 18,
      fontWeight: 'bold',
      color: "#ed3456",
      alignItems: 'center',
      marginLeft: '28%',
    },
    botaoTexto: {
      fontWeight: "700",
      fontFamily: "Roboto",
      fontSize: 12,
      color: "#ed3456",
    },
    textoTema: {
      fontSize: 18,
      fontWeight: 'bold',
      color: "#35BFCD",
      alignItems: 'center',
    },
    pickerarea: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      minWidth: 20,
      marginHorizontal: 16,
      marginVertical: 8,
      padding: 16,
      backgroundColor: tema.fundo,
      borderRadius: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#ed3456",
      top: '-62%',
    },
    textoPicker: {
      fontSize: 18,
      fontWeight: 'bold',
      color: "#ed3456",
      alignItems: 'center',
      marginLeft: '30%',
    },
    picker: {
      width: '60%',
      backgroundColor: tema.fundoBotao,
      marginLeft: '24%',
      marginEnd: '30%',
    },
    botao: {
      flexDirection: "row",
      alignItems: 'center',
      padding: 5,
      backgroundColor: tema.fundoBotao,
      borderRadius: 10,
      shadowColor: tema.borda,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }
  })

}