import React, { useContext, useEffect, useState } from "react"
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { salvarTarefa, atualizarTarefa, excluirTarefa } from '../../server/firestore';
import SelecionaHorarioModal from "../SelecionaHorarioModal";
import { Alerta } from "../Alerta";
import { EmpresaContext } from "../../contexts/EmpresaContext";
import LottieView from 'lottie-react-native';
import lottiOK from '../../assets/ok.json'

export default function TarefaModal({ dataAtual, tarefaSelecionada, setTarefaSelecionado, diaModalHorario, tarefa }) {

  useEffect(() => {
    if (tarefaSelecionada.id) {
      editarTarefa()
      setModalVisivel(true)
      setTarefaParaAtualizar(true)
    }
  }, [tarefaSelecionada])

  const { idEmpresa } = useContext(EmpresaContext)
  const [cliente, setCliente] = useState('')
  const [horarioAtual, setHorarioAtual] = useState('')
  const [minutos, setMinutos] = useState('')
  const [idHorario, setIdHorario] = useState('')
  const [descricao, setDescricao] = useState('')
  const [modalVisivel, setModalVisivel] = useState(false)
  const [modalSelecionaHorario, setModalSelecionaHorario] = useState(false)
  const [tarefaParaAtualizar, setTarefaParaAtualizar] = useState(false)
  const [lottieOK, setLottieOK] = useState(0)
  const [mensagemError, setMensagemError] = useState('');
  const [statusError, setStatusError] = useState('');


  function editarTarefa() {
    setCliente(tarefaSelecionada.cliente)
    setDescricao(tarefaSelecionada.descricao)
    setMinutos(tarefaSelecionada.minutos)
    setHorarioAtual(tarefaSelecionada.hora)
    setIdHorario(tarefaSelecionada.idHorario)
  }

  function limpaModal() {
    setCliente('')
    setDescricao('')
    setStatusError('')
    setMinutos('')
    setHorarioAtual('')
    setTarefaSelecionado({})
    setModalVisivel(false)
    setTarefaParaAtualizar(false)
  }

  async function excluir() {
    if (tarefaParaAtualizar) {
      await excluirTarefa(tarefaSelecionada.id, idEmpresa)
    }
    setLottieOK(1)
    limpaModal()
  }

  async function salvar() {
    let resultado
    
    if (cliente == '') {
      setMensagemError('O nome do cliente é obrigatório!');
      setStatusError('cliente')
    } else if (horarioAtual == '') {
      setMensagemError('O horario é obrigatório!');
      setStatusError('horario')
    } else {
      if (tarefaParaAtualizar) {
        resultado = await atualizarTarefa(tarefaSelecionada.id, {
          cliente: cliente,
          descricao: descricao,
          hora: horarioAtual,
          minutos: minutos,
          idHorario: idHorario,
        }, idEmpresa)
      } else {
        resultado = await salvarTarefa({
          cliente: cliente,
          descricao: descricao,
          hora: horarioAtual,
          minutos: minutos,
          idHorario: idHorario,
          data: dataAtual
        }, idEmpresa)
      }
      setLottieOK(1)
      limpaModal()
    }
    if (resultado === 'Error') {
      setStatusError('firebase')
      setMensagemError('Erro ao tentar salvar tarefa!');
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
              <Text style={estilos.modalTitulo}>Criar tarefa</Text>

              <Text style={estilos.modalSubTitulo}>Nome do cliente*</Text>
              <TextInput
                style={estilos.modalInput}
                onChangeText={novoCliente => setCliente(novoCliente)}
                placeholder="Digite o nome do cliente"
                value={cliente} />
              <Text style={estilos.mensagemError}>{statusError == 'cliente' ? mensagemError : ''}</Text>

              <Text style={estilos.modalSubTitulo}>Descrição da tarefa</Text>
              <TextInput
                style={estilos.modalInput}
                multiline={true}
                onChangeText={novoDescricao => setDescricao(novoDescricao)}
                placeholder="Digite aqui a descrição"
                value={descricao} />

              <Text style={estilos.tituloHorario}>Horario*</Text>
              <TouchableOpacity style={estilos.modalHorario} onPress={() => { setModalSelecionaHorario(true) }}>
                <Text style={estilos.modalHorarioTexto}>{horarioAtual + ":" + minutos}</Text>
              </TouchableOpacity>
              <Text style={estilos.mensagemError}>{statusError == 'horario' ? mensagemError : ''}</Text>

              <SelecionaHorarioModal setHorarioAtual={setHorarioAtual} setMinutos={setMinutos} setIdHorario={setIdHorario} tarefa={tarefa} diaModalHorario={diaModalHorario}
                modalSelecionaHorario={modalSelecionaHorario} setModalSelecionaHorario={setModalSelecionaHorario} />

              <View style={estilos.modalBotoes}>
                <TouchableOpacity style={estilos.modalBotaoSalvar} onPress={() => { salvar() }}>
                  <Text style={estilos.modalBotaoTexto}>Salvar</Text>
                </TouchableOpacity>
                {tarefaParaAtualizar ?
                  <TouchableOpacity style={estilos.modalBotaoCancelar} onPress={() => { excluir() }}>
                    <Text style={estilos.modalBotaoTexto}>Excluir</Text>
                  </TouchableOpacity> : <></>
                }
                <TouchableOpacity style={estilos.modalBotaoCancelar} onPress={() => { limpaModal() }}>
                  <Text style={estilos.modalBotaoTexto}>Cancelar</Text>
                </TouchableOpacity>
              </View>
              <Alerta
                mensagem={mensagemError}
                error={statusError == 'firebase'}
                setError={setStatusError}
              />
            </View>
          </ScrollView>
        </View>
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
  modalHorario: {
    alignItems: "center",
    minWidth: 250,
    padding: 10,
    marginBottom: 10,
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
  modalHorarioTexto: {
    fontSize: 28,

  },
  modalSubTitulo: {
    fontSize: 14,
    fontWeight: "600"
  },
  tituloHorario: {
    fontSize: 14,
    marginTop: 12,
    fontWeight: "600"
  },
  mensagemError: {
    fontSize: 12,
    color: '#ff0000',
    marginBottom: 8,
    fontWeight: "600"
  },
  modalBotoes: {
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
  }
});
