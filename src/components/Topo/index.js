import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { TemaContext } from "../../contexts/TemaContext";
import { Feather } from 'react-native-vector-icons'
import React, { useContext } from "react";
import { estilos } from './estilos'

export default function Topo({ texto, icon }) {

    const navigation = useNavigation();

    const { temaEscolhido } = useContext(TemaContext);

    const estilo = estilos(temaEscolhido)

    return (
        <View style={estilo.topoArea} >

            <TouchableOpacity style={estilo.menu} onPress={() => navigation.goBack()}>
                <Feather name={icon} size={30} color={temaEscolhido.texto} />
                <Text style={estilo.textoTopo}>{texto}</Text>
            </TouchableOpacity>

            <Image
                source={require('../../assets/logo.png')}
                style={estilo.imageTopo}
            />
        </View>

    )
}