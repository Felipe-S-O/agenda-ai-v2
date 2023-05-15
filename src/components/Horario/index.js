import { Text, TouchableOpacity, View } from 'react-native';
import estilos from './estilos'
export function Horario({ item, setHorarioSelecionado }) {

    return (
        < View style={estilos.horarioDisponivelArea} >
            <TouchableOpacity style={estilos.botaoArea} onPress={() => setHorarioSelecionado(item)}>
                <Text style={estilos.numero}>{item.hora + ":" + item.minutos}</Text>
            </TouchableOpacity>
        </View >
    )
}
