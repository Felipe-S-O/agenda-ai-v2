import { Text, View, TouchableOpacity } from 'react-native';
import { estilos } from './estilos'

export function Tarefa({ item, setTarefaSelecionado }) {

  return (
    <View style={estilos.cartao}>
      <TouchableOpacity style={estilos.textoContainer} onPress={() => setTarefaSelecionado(item)}>
        <View>
          <Text style={estilos.texto} numberOfLines={1}>{item.cliente}</Text>
          <Text style={estilos.telefone}>{item.telefone}</Text>
          <Text style={estilos.descricao}>{item.descricao}</Text>
        </View>
        <Text style={estilos.horario}>{item.hora + ':' + item.minutos}</Text>
      </TouchableOpacity>
    </View>
  );
}
