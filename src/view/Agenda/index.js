import { View, Text, Image, FlatList, SafeAreaView } from 'react-native'
import React, { useContext, useEffect, useState } from "react";
import { pegarTarefaTempoReal } from '../../server/firestore';
import Calendar from '../../assets/calendar-animacao.json'
import { TemaContext } from "../../contexts/TemaContext";
import TarefaModal from '../../components/TarefaModal';
import { Tarefa } from '../../components/Tarefa'
import DateTime from '../../components/DateTime';
import LottieView from 'lottie-react-native';
import { estilos } from './estilos'
import { StatusBar } from 'react-native';
import { EmpresaContext } from '../../contexts/EmpresaContext';

export default () => {

    const { idEmpresa } = useContext(EmpresaContext)
    const { temaEscolhido } = useContext(TemaContext);
    const estilo = estilos(temaEscolhido);
    const [dataAtual, setDataAtual] = useState('')
    const [tarefa, setTarefa] = useState([])
    const [tarefaSelecionada, setTarefaSelecionado] = useState({})
    const [lottieEntrada, setLottieEntrada] = useState(true)
    const [diaModalHorario, setDiaModalHorario] = useState('')


    useEffect(() => {
        let tempDate = new Date();
        let fDate
        let fdia = tempDate.getDay();

        if ((tempDate.getMonth() + 1) <= 9 && tempDate.getDate() <= 9) {
            fDate = '0' + tempDate.getDate() + '/0' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()

        } else if (tempDate.getDate() > 9 && (tempDate.getMonth() + 1) <= 9) {
            fDate = tempDate.getDate() + '/0' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()

        } else if (tempDate.getDate() <= 9 && (tempDate.getMonth() + 1) > 9) {
            fDate = '0' + tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()

        } else {
            fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
        }

        setDataAtual(fDate)
        setDiaModalHorario(fdia)
    }, [])

    useEffect(() => {
        const intervalo = setInterval(() => {
            setLottieEntrada(false)
            clearInterval(intervalo);
        }, 4000)
        pegarTarefaTempoReal(setTarefa, dataAtual, idEmpresa)
    }, [dataAtual])

    return (
        <SafeAreaView style={estilo.container}>
            <StatusBar backgroundColor="#ed3456" />
            <View style={estilo.topoArea} >
                <Text style={estilo.textoTopo}>Agenda</Text>
                <Image
                    source={require('../../assets/logo.png')}
                    style={estilo.imageTopo}
                />
            </View>
            <View style={estilo.tituloArea}>
                <DateTime tipo='date' setDataAtual={setDataAtual} setDiaModalHorario={setDiaModalHorario} />
            </View>
            <View style={estilo.agenda}>
                <FlatList
                    data={tarefa.sort(function (a, b) {
                        if (a.hora > b.hora) {
                            return 1;
                        }
                        if (a.hora < b.hora) {
                            return -1;
                        }
                        return 0;
                    })}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Tarefa item={item} setTarefaSelecionado={setTarefaSelecionado} />}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <TarefaModal diaModalHorario={diaModalHorario} tarefa={tarefa} dataAtual={dataAtual} tarefaSelecionada={tarefaSelecionada}
                setTarefaSelecionado={setTarefaSelecionado} />
            {lottieEntrada ?
                <LottieView
                    style={estilo.lettieEntrada}
                    source={Calendar}
                    loop={false}
                    autoPlay={true}
                /> : <></>
            }
        </SafeAreaView>
    )

}