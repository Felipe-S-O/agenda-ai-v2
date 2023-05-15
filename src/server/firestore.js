import { db } from "../config/Firbase";
import { collection, addDoc, doc, updateDoc, deleteDoc, query, where, onSnapshot} from "firebase/firestore";

export async function salvarHorario(dados, idEmpresa) {

    try {
        await addDoc(collection(db, 'horario:'+idEmpresa), dados)
        return 'ok'
    } catch (error) {
        console.log('Erro add Horario: ', error)
        return 'erro'
    }
}

export async function salvarTarefa(dados, idEmpresa) {
    try {
        await addDoc(collection(db, 'tarefa:'+idEmpresa), dados)
        return 'ok'
    } catch (error) {
        console.log('Erro add Horario: ', error)
        return 'erro'
    }
}

export async function pegarHorarioTempoReal(setHorario, dia, idEmpresa) {
    try {
        const q = query(collection(db, 'horario:'+idEmpresa), where("dia", "==", dia));
        onSnapshot(q, (querySnapshot) => {
            const horarios = [];
            querySnapshot.forEach((doc) => {
                horarios.push({ id: doc.id, ...doc.data() });
            });
            setHorario(horarios)
        });
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function pegarTarefaTempoReal(setTarefa, dataAtual, idEmpresa) {
    try {
        const ref = query(collection(db, 'tarefa:'+idEmpresa), where("data", "==", dataAtual))
        onSnapshot(ref, (querySnapshot) => {
            const tarefas = []
            querySnapshot.forEach((doc) => {
                tarefas.push({ id: doc.id, ...doc.data() })
            })
            setTarefa(tarefas)
            console.log(tarefas)
        })
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function pegarEmpresaTempoReal(setEmpresa) {
    try {
        const ref = query(collection(db, 'empresa'))
        onSnapshot(ref, (querySnapshot) => {
            const empresas = []
            querySnapshot.forEach((doc) => {
                empresas.push({ id: doc.id, ...doc.data() })
            })
            setEmpresa(empresas)
        });

    } catch (error) {
        console.log(error)
        return []
    }
}

export async function atualizarHorario(id, dados, idEmpresa) {
    try {
        const horarioRef = doc(db, "horario:"+idEmpresa, id);
        await updateDoc(horarioRef, dados);
        return 'ok'
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}

export async function atualizarTarefa(id, dados, idEmpresa) {
    try {
        const tarefaRef = doc(db, "tarefa:"+idEmpresa, id);
        await updateDoc(tarefaRef, dados);
        return 'ok'
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}

export async function excluirTarefa(id, idEmpresa) {
    try {
        await deleteDoc(doc(db, "tarefa:"+idEmpresa, id));
        return 'ok'
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}

export async function excluirHorario(id, idEmpresa) {
    try {
        await deleteDoc(doc(db, "horario:"+idEmpresa, id));
        return 'ok'
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}