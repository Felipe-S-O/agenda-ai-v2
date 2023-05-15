import React, { useContext } from "react";
import { Text, View, Switch, Image, StatusBar } from 'react-native'
import { TemaContext } from "../../contexts/TemaContext";
import { estilos } from "./estilos";
import { useNavigation } from "@react-navigation/native";
import { auth } from '../../config/Firbase'
import { Feather } from 'react-native-vector-icons'
import { TouchableOpacity } from "react-native";

export default function Configuracoes() {

    const navigation = useNavigation()
    const { temaAtual, temaEscolhido, salvarTemaNoDispositivo } = useContext(TemaContext);
    const estilo = estilos(temaEscolhido)

    function deslogar() {
        auth.signOut();
        navigation.replace('Login');
    }

    return (
        <TemaContext.Provider value={temaAtual}>
            <StatusBar
                backgroundColor="#ed3456"
            />
            <View style={estilo.container}>
                <View style={estilo.topoArea} >
                    <Text style={estilo.textoTopo}>Configuração</Text>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={estilo.imageTopo}
                    />
                </View>
                <View style={estilo.sairArea}>
                    <TouchableOpacity style={estilo.botao} onPress={() => deslogar()} >
                        <Text style={estilo.botaoTexto}>sair </Text>
                        <Feather text='sair' name="log-out" size={32} color="#ed3456" />
                    </TouchableOpacity>
                </View>
                <View style={estilo.switchArea}>
                    <Text style={estilo.textoSwitch}>Tema: </Text>
                    <Text style={estilo.textoTema}>{temaAtual === 'escuro' ? 'escuro' : 'claro'}</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#ed3456' }}
                        style={estilo.switch}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => temaAtual === 'escuro' ? salvarTemaNoDispositivo('claro') : salvarTemaNoDispositivo('escuro')}
                        value={temaAtual === 'escuro' ? true : false}
                    />
                </View>
            </View >
        </TemaContext.Provider>

    );
}
