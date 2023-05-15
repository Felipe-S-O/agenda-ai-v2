import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firbase"

export async function cadastrar(email, senha) {
    createUserWithEmailAndPassword(auth, email, senha)
        .then((dadosDoUsuario) => {
            // Signed in
           
        })
        .catch((error) => {
            console.log(error)
            // ..
        });
}

export async function logar(email, senha) {
    const resultado = await signInWithEmailAndPassword(auth, email, senha)
        .then((dadosDoUsuario) => {

            return "Sucesso"
        })
        .catch((error) => {
            console.log("Error")
            return "Error"
        });
    return resultado
}
