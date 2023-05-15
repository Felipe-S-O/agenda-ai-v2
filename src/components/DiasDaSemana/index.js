import { Text, TouchableOpacity, View} from 'react-native';
import estilos from './estilos'

export function DiasDaSemana({ dia, setDia}) {    

    return (
        <View style={estilos.container}>
            <TouchableOpacity style={dia === 1 ? [estilos.diaArea, { backgroundColor: '#ed3456' }]
                : estilos.diaArea} onPress={() => setDia(1)}>
                <Text style={dia === 1 ? [estilos.texto, { color: '#FFF' }]
                    : estilos.texto} >Seg</Text>
            </TouchableOpacity>
            <TouchableOpacity style={dia === 2 ? [estilos.diaArea, { backgroundColor: '#ed3456' }]
                : estilos.diaArea} onPress={() => setDia(2)}>
                <Text style={dia === 2 ? [estilos.texto, { color: '#FFF' }]
                    : estilos.texto} >Ter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={dia === 3 ? [estilos.diaArea, { backgroundColor: '#ed3456' }]
                : estilos.diaArea} onPress={() => setDia(3)}>
                <Text style={dia === 3 ? [estilos.texto, { color: '#FFF' }]
                    : estilos.texto} >Qua</Text>
            </TouchableOpacity>
            <TouchableOpacity style={dia === 4 ? [estilos.diaArea, { backgroundColor: '#ed3456' }]
                : estilos.diaArea} onPress={() => setDia(4)}>
                <Text style={dia === 4 ? [estilos.texto, { color: '#FFF' }]
                    : estilos.texto} >Qui</Text>
            </TouchableOpacity>
            <TouchableOpacity style={dia === 5 ? [estilos.diaArea, { backgroundColor: '#ed3456' }]
                : estilos.diaArea} onPress={() => setDia(5)}>
                <Text style={dia === 5 ? [estilos.texto, { color: '#FFF' }]
                    : estilos.texto}>Sex</Text>
            </TouchableOpacity>
            <TouchableOpacity style={dia === 6 ? [estilos.diaArea, { backgroundColor: '#ed3456' }]
                : estilos.diaArea} onPress={() => setDia(6)}>
                <Text style={dia === 6 ? [estilos.texto, { color: '#FFF' }]
                    : estilos.texto} >Sab</Text>
            </TouchableOpacity>
            <TouchableOpacity style={dia === 7 ? [estilos.diaArea, { backgroundColor: '#ed3456' }]
                : estilos.diaArea} onPress={() => setDia(7)}>
                <Text style={dia === 7 ? [estilos.texto, { color: '#FFF' }]
                    : estilos.texto}>Dom</Text>
            </TouchableOpacity>
        </View>
    );
}
