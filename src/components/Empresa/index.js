import React, { useContext, useState } from "react"
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView} from "react-native"
import { EmpresaContext } from "../../contexts/EmpresaContext"

export default function Empresa() {

  const {salvarEmpresaNoDispositivo } = useContext(EmpresaContext);
  const [msgErro, setMsgErro] = useState("")
  const [empresa, setEmpresa] = useState("")
  const [modalVisivel, setModalVisivel] = useState(false)

  const salvar = () => {
    if (empresa == "") {
      setMsgErro('Campo id da empresa é obrigatorio!')
    } else {
      salvarEmpresaNoDispositivo(empresa)
      setModalVisivel(false)
    }
  }

  const cancelar = () => {
    setModalVisivel(false)
    setMsgErro('')
  }

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => { setModalVisivel(false) }}
      >
        <View style={estilos.centralizaModal}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={estilos.modal}>
              <Text style={estilos.modalTitulo}>Dados da sua empresa</Text>
              <Text style={estilos.modalSubTitulo}>ID da empresa*</Text>
              <TextInput
                style={estilos.modalInput}
                multiline={true}
                numberOfLines={3}
                onChangeText={novoTexto => setEmpresa(novoTexto)}
                placeholder="Digite id da empresa"
                value={empresa} />
              <Text style={estilos.textoErro}>{msgErro == ''? '': msgErro}</Text>
              <View style={estilos.modalBotoes}>
                <TouchableOpacity style={estilos.modalBotaoSalvar} onPress={() => { salvar() }}>
                  <Text style={estilos.modalBotaoTexto}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.modalBotaoCancelar} onPress={() => { cancelar() }}>
                  <Text style={estilos.modalBotaoTexto}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
      <TouchableOpacity style={estilos.logo} onPress={() => { setModalVisivel(true) }} >
        <Image
          source={require('../../assets/logo.png')}
          style={estilos.logo}
        />
      </TouchableOpacity>
    </>
  )
}

const estilos = StyleSheet.create({
  centralizaModal: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end"
  },
  modal: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    marginTop: 8,
    marginHorizontal: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  logo: {
    position: "absolute",
    width: 140,
    height: 56,
    top: 6,
    left: 10,
  },
  modalTitulo: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 18,
  },
  modalInput: {
    fontSize: 18,
    marginBottom: 12,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#ed3456",
  },
  modalPicker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#EEEEEE",
    marginBottom: 12,
  },
  modalSubTitulo: {
    fontSize: 14,
    top: 10,
    fontWeight: "600"
  },
  textoErro: {
    fontSize: 12,
    fontWeight: "400",
    color: "#ff0000",
  },
  modalBotoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 20
  },
  modalBotaoSalvar: {
    backgroundColor: "#ed3456",
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: "center",
  },
  modalBotaoCancelar: {
    backgroundColor: "#ed3456",
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: "center",
  },
  modalBotaoTexto: {
    color: "#FFFFFF",
  },
  adicionarMemo: {
    backgroundColor: "#54ba32",
    justifyContent: "center",
    height: 64,
    width: 64,
    margin: 16,
    alignItems: "center",
    borderRadius: 9999,
    position: "absolute",
    bottom: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  adicionarMemoTexto: {
    fontSize: 32,
    lineHeight: 40,
    color: "#FFFFFF",
  }
});
