import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { escuro, claro } from "../estilos/estilosGlobais";

export const TemaContext = createContext({})

export function TemaProvider({ children }) {

    const [temaAtual, setTemaAtual] = useState('escuro')

    const temas = {
        'escuro': escuro,
        'claro': claro
    }

    useEffect(() => {
        async function getTema() {
            const temaSalvo = await AsyncStorage.getItem('@tema')
            if (temaSalvo) {
                setTemaAtual(temaSalvo)
            }
        }
        getTema()
    }, [])

    async function salvarTemaNoDispositivo(tema) {
        await AsyncStorage.setItem('@tema', tema)
        setTemaAtual(tema)
    }

    return (
        <TemaContext.Provider value={{ temaAtual, temaEscolhido: temas[temaAtual], salvarTemaNoDispositivo }}>
            {children}
        </TemaContext.Provider>
    )
}