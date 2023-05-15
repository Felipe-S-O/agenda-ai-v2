import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const EmpresaContext = createContext({})

export function EmpresaProvider({ children }) {

    const [ idEmpresa, setEmpresa] = useState("")

   useEffect(() => {
        async function getEmpresa() {
            const empresaSalvo = await AsyncStorage.getItem('@empresa')

            if (empresaSalvo) {
                setEmpresa(empresaSalvo)
           }
        }
        getEmpresa()
  }, [])

    async function salvarEmpresaNoDispositivo(idEmpresa) {
        await AsyncStorage.setItem('@empresa', idEmpresa)
        setEmpresa(idEmpresa)

    }

    return (
        <EmpresaContext.Provider value={{ idEmpresa, salvarEmpresaNoDispositivo }}>
            {children}
        </EmpresaContext.Provider>
    )
}