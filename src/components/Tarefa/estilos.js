import { StyleSheet } from 'react-native';

export const estilos = new StyleSheet.create({
  cartao: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: "90%",
    maxWidth: "92%",
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    backgroundColor: "#FFFFFF",
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
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 32,
  },
  textoContainer: {
    flexDirection: "row",
    minWidth: "86%",
    maxWidth: "88%",
    marginHorizontal: 12,
    justifyContent: "space-between",
  },
  texto: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    maxWidth: 200,
  },
  descricao: {
    color: "#ed3456",
  },
  telefone: {
    fontSize: 12,
    fontWeight: "700",
    color: "#35BFCD",
  },
  horario: {
    fontSize: 20,
    color: "#5E9B71",
  },
})