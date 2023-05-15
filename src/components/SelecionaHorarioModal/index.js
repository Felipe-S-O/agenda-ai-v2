import React, { useContext, useEffect, useState } from "react"
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { pegarHorarioTempoReal } from '../../server/firestore'
import { HorarioTarefa } from "../HorarioTarefa"
import { FlatList } from "react-native"
import { EmpresaContext } from "../../contexts/EmpresaContext"

export default function SelecionaHorarioModal({ tarefa, modalSelecionaHorario, setModalSelecionaHorario, diaModalHorario, setMinutos, setHorarioAtual, setIdHorario }) {

  const { idEmpresa } = useContext(EmpresaContext)
  const [horario, setHorario] = useState([])
  const [horarioSelecionado, setHorarioSelecionado] = useState({})

  useEffect(() => {
    pegarHorarioTempoReal(setHorario, diaModalHorario, idEmpresa)
  }, [diaModalHorario])


  useEffect(() => {
    if (horarioSelecionado.id) {
      setHorarioAtual(horarioSelecionado.hora)
      setMinutos(horarioSelecionado.minutos)
      setIdHorario(horarioSelecionado.id)
      console.log(horarioSelecionado)
      setModalSelecionaHorario(false)
    }
  }, [horarioSelecionado])

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalSelecionaHorario}
        onRequestClose={() => { setModalSelecionaHorario(false) }}
      >
        <View style={estilos.centralizaModal}>
          <View showsVerticalScrollIndicator={false}>
            <View style={estilos.modal}>
              <Text style={estilos.modalTitulo}>Selecione o horario</Text>
              <FlatList
                numColumns={3}
                data={horario.sort(function (a, b) {
                  if (a.hora > b.hora) {
                    return 1;
                  }
                  if (a.hora < b.hora) {
                    return -1;
                  }
                  return 0;
                })}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <HorarioTarefa item={item} tarefa={tarefa} setHorarioSelecionado={setHorarioSelecionado} />}
              />
              <View style={estilos.modalBotoes}>
                <TouchableOpacity style={estilos.modalBotaoCancelar} onPress={() => { setModalSelecionaHorario(false) }}>
                  <Text style={estilos.modalBotaoTexto}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

const estilos = StyleSheet.create({
  centralizaModal: {
    top: 62,
    alignItems: "center",
    justifyContent: 'center'
  },
  modal: {
    backgroundColor: "#FFFFFF",
    minWidth: '90%',
    padding: 8,
    paddingBottom: 90,
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
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  modalBotoes: {
    alignItems: 'flex-end',
    paddingEnd: 16,
  },
  modalBotaoSalvar: {
    backgroundColor: "#2ea805",
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
  },
  modalBotaoTexto: {
    color: "#FFFFFF",
  },

});
