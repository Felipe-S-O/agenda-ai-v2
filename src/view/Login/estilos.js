import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "#ed3456",
  },
  logo: {
    position: "absolute",
    width: 130,
    height: 47,
    top: 14,
    left: 20,
  },
  carrosselArea: {
    height: 140,
    marginBottom: -30,
    paddingHorizontal: 20,
  },
  atendenteImg: {
    width: "80%",
    height: 400,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  infoArea: {
    width: '100%',
    height: '100%',
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  titulo: {
    fontWeight: "700",
    fontFamily: "Roboto",
    fontSize: 24,
    color: "#ed3456",
  },
  texto: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: '#A3A3A3',
    marginTop: 10,
  },
  botao: {
    height: 60,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ed3456",
    marginVertical: 10,
  },
  botaoTexto: {
    fontWeight: "700",
    fontFamily: "Roboto",
    fontSize: 16,
    color: '#FFFFFF',
  },
  input: {
    backgroundColor: "#FFF",
    marginBottom: 24,
    marginEnd: -100,
    padding: 10,
    borderRadius: 5,
    color: "#CBA122",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputArea: {
    marginTop: 25,
    backgroundColor: "#FFF",
    marginBottom: 24,
    marginEnd: -100,
  },
  lettieOK: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    position: "absolute",
  }
});