import { View, LayoutAnimation, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import estilos from "./estilos";
import { StatusBar } from "react-native";

export default function Inicio() {

    const navigation = useNavigation();

    function alteraTela() {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        });
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
            alteraTela();
            clearInterval(intervalo);
        }, 4000)
    }, [])

    LayoutAnimation.spring();
    return (
        < View style={estilos.container}>
            <StatusBar barStyle='dark-content' backgroundColor="#ed3456" />
            <Image
                source={require('../../assets/inottecCompleto.gif')}
                style={estilos.image}
            />
        </View>
    )
}