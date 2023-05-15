import React, { useContext, useEffect, useState } from "react"
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import DateTime from "../DateTime"
import { salvarHorario, atualizarHorario, excluirHorario } from '../../server/firestore';
import LottieView from 'lottie-react-native';
import lottiOK from '../../assets/ok.json'
import { Alerta } from "../Alerta";
import { EmpresaContext } from "../../contexts/EmpresaContext";

export default function HorarioModal({ dia, horarioSelecionada, setHorarioSelecionado, }) {

  useEffect(() => {
    if (horarioSelecionada.id) {
      editarHorario()
      setModalVisivel(true)
      setHorarioParaAtualizar(true)
    }
  }, [horarioSelecionada])

  const { idEmpresa } = useContext(EmpresaContext)
  const [modalVisivel, setModalVisivel] = useState(false)
  const [semana, setSemana] = useState(1)
  const [horarioAtual, setHorarioAtual] = useState({hora: 0, minutos: 0})
  const [horarioTexto, setHorarioTexto] = useState(":")
  const [horarioParaAtualizar, setHorarioParaAtualizar] = useState(false)
  const [lottieOK, setLottieOK] = useState(0)
  const [mensagemError, setMensagemError] = useState("");
  const [statusError, setStatusError] = useState("");

  function editarHorario() {
    setHorarioAtual(horarioSelecionada)
    setHorarioTexto(horarioSelecionada.hora + ":" + horarioSelecionada.minutos)
    setSemana(dia)
  }

  function limpaModal() {
    setHorarioAtual({hora: 0, minutos: 0})
    setHorarioSelecionado({})
    setStatusError('')
    setHorarioTexto(":")
    setModalVisivel(false)
    setHorarioParaAtualizar(false)
  }

  async function excluir() {
    if (horarioParaAtualizar) {
      await excluirHorario(horarioSelecionada.id, idEmpresa)
    }
    setLottieOK(1)
    limpaModal()
  }

  async function salvar() {
    if (horarioAtual.hora <= 0) {
      setHorarioAtual({hora: 0, minutos: 0})
      setMensagemError('O horario é obrigatório!');
      setStatusError('horario')
    } else {
      let resultado = ''
      if (horarioParaAtualizar) {
        resultado = await atualizarHorario(horarioSelecionada.id, {
          hora: horarioAtual.hora,
          minutos: horarioAtual.minutos,
          dia: semana,
          disponivel: true
        }, idEmpresa)
      } else {
        resultado = await salvarHorario({
          hora: horarioAtual.hora,
          minutos: horarioAtual.minutos,
          dia: dia,
          disponivel: true
        }, idEmpresa)
      }
      if (resultado === 'Error') {
        setStatusError('firebase')
        setMensagemError('Erro ao criar Horario!');
      }
      setLottieOK(1)
      limpaModal()
    }
  }
   

  function tempo() {
    const intervalo = setInterval(() => {
      setLottieOK(0)
      clearInterval(intervalo);
    }, 2000)
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
              <Text style={estilos.modalTitulo}>Criar Horario</Text>
              <Text style={estilos.modalSubTitulo}>Selecione a hora*</Text>
              <DateTime tipo='time' horarioTexto={horarioTexto} setHorarioAtual={setHorarioAtual} />
              <Text style={estilos.mensagemError}>{statusError == 'horario' ? mensagemError : ''}</Text>
              <View style={estilos.modalBotoes}>
                <TouchableOpacity style={estilos.modalBotaoSalvar} onPress={() => { salvar() }}>
                  <Text style={estilos.modalBotaoTexto}>Salvar</Text>
                </TouchableOpacity>
                {horarioParaAtualizar ?
                  <TouchableOpacity style={estilos.modalBotaoCancelar} onPress={() => { excluir() }}>
                    <Text style={estilos.modalBotaoTexto}>Excluir</Text>
                  </TouchableOpacity> : <></>
                }
                <TouchableOpacity style={estilos.modalBotaoCancelar} onPress={() => { limpaModal() }}>
                  <Text style={estilos.modalBotaoTexto}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
        <Alerta
          mensagem={mensagemError}
          error={statusError == 'firebase'}
          setError={setStatusError}
        />
      </Modal>
      {lottieOK == 1 ?
        <LottieView
          style={estilos.lettieOK}
          source={lottiOK}
          loop={false}
          autoPlay={true}
          onAnimationFinish={tempo()}
        /> : <></>
      }
      <TouchableOpacity onPress={() => { setModalVisivel(true) }} style={estilos.adicionarMemo}>
        <Text style={estilos.adicionarMemoTexto}>+</Text>
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
  modalTitulo: {
    color: "#ed4463",
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 18,
  },
  modalInput: {
    fontSize: 18,
    marginBottom: 12,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#FF9A94",
  },
  modalPicker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#EEEEEE",
    marginBottom: 12,
  },
  modalSubTitulo: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "600"
  },
  modalBotoes: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  modalBotaoSalvar: {
    backgroundColor: "#2ea805",
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: "center",
  },
  modalBotaoDeletar: {
    backgroundColor: "#d62a18",
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: "center",
  },
  modalBotaoCancelar: {
    backgroundColor: "#057fa8",
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: "center",
  },
  modalBotaoTexto: {
    color: "#FFFFFF",
  },
  adicionarMemo: {
    backgroundColor: "#ed3456",
    justifyContent: "center",
    height: 64,
    width: 64,
    margin: 24,
    marginBottom: 90,
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
  },
  lettieOK: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    position: "absolute",
  },
  mensagemError: {
    fontSize: 12,
    color: '#ff0000',
    marginBottom: 8,
    fontWeight: "600"
  },
});
