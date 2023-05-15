import { View, Text, Image, FlatList, SafeAreaView, } from 'react-native'
import { pegarHorarioTempoReal } from '../../server/firestore';
import React, { useContext, useEffect, useState } from "react";
import { DiasDaSemana } from '../../components/DiasDaSemana';
import calendar from '../../assets/calendar-animacao.json'
import HorarioModal from '../../components/HorarioModal'
import { TemaContext } from "../../contexts/TemaContext";
import { Horario } from '../../components/Horario';
import LottieView from 'lottie-react-native';
import { estilos } from './estilos'
import { EmpresaContext } from '../../contexts/EmpresaContext';

export default () => {

    const { idEmpresa } = useContext(EmpresaContext)
    const { temaEscolhido } = useContext(TemaContext);
    const estilo = estilos(temaEscolhido);
    const [horarioSelecionada, setHorarioSelecionado] = useState({})
    const [horario, setHorario] = useState([])
    const [dia, setDia] = useState(1)
    const [lottieEntrada, setLottieEntrada] = useState(true)

    useEffect(() => {
        pegarHorarioTempoReal(setHorario, dia, idEmpresa)
        const intervalo = setInterval(() => {
            setLottieEntrada(false)
            clearInterval(intervalo);
        }, 4000)
    }, [dia])

    return (
        <SafeAreaView style={estilo.container}>
            <View style={estilo.topoArea} >
                <Text style={estilo.textoTopo}>Horarios</Text>
                <Image
                    source={require('../../assets/logo.png')}
                    style={estilo.imageTopo}
                />
            </View>
            <View style={estilo.tituloArea}>
                <Text style={estilo.texto}>Horario Disponível</Text>
                <DiasDaSemana dia={dia} setDia={setDia} />
            </View>

            <View style={estilo.horasArea}>
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
                    renderItem={({ item }) => <Horario item={item} setHorarioSelecionado={setHorarioSelecionado} />}
                />
            </View>
            <HorarioModal dia={dia} horarioSelecionada={horarioSelecionada} setHorarioSelecionado={setHorarioSelecionado} />
            {lottieEntrada ?
                <LottieView
                    style={estilo.lettieEntrada}
                    source={calendar}
                    loop={false}
                    autoPlay={true}
                /> : <></>
            }
        </SafeAreaView>
    )

}