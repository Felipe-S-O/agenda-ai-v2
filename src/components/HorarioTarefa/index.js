import { Text, TouchableOpacity, View } from 'react-native';
import estilos from './estilos'
import { useEffect, useState } from 'react';
export function HorarioTarefa({ item, setHorarioSelecionado, tarefa }) {

    const [disponivel, setDisponivel] = useState(1)

    useEffect(() => {
        tarefa.forEach(function (doc) {
            if (doc.idHorario == item.id) {
                setDisponivel(0)
            }
        })
    }, [])

    return <>
        {disponivel == 1 ?
            <View style={estilos.horarioDisponivelArea}>
                <TouchableOpacity style={estilos.botaoArea} onPress={() => setHorarioSelecionado(item)}>
                    <Text style={estilos.numero}>{item.hora + ":" + item.minutos}</Text>
                </TouchableOpacity>
            </View>
            :
            <View style={estilos.horarioIndisponivelArea}>
                <TouchableOpacity style={estilos.botaoArea}>
                    <Text style={estilos.numero}>{item.hora + ":" + item.minutos}</Text>
                </TouchableOpacity>
            </View>
        }
    </>
}
